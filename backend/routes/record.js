const { response } = require("express");
const express = require("express");

// This references example code found in: https://www.mongodb.com/languages/mern-stack-tutorial

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help us add users to the db
recordRoutes.route("/user/:id").put(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    _id: req.body.id,
    name: req.body.name,
    img: req.body.img,
    topArtists: req.body.topArtists,
    topSongs: req.body.topSongs,
    topGenres: req.body.topGenres,
    linkedSocials: {facebook: {}, instagram: {}, twitter: {}, pinterest: {}},
    followers: [],
    following: [],
    interestedEvents: [],
    goingEvents: [],
    subscribedArtists: [],
    isPrivateAccount: false,
    outGoingFriendRequests: [],
    inComingfriendRequests: [],
  };
  let myquery = { "_id": myobj._id };
  db_connect.collection("user").findOne(myquery, function (err, res) {
    if (res != null) {
      console.log("User exists");
    }
    else {
      console.log("user does not exist yet");
      db_connect.collection("user").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
    }
  });
});

// This section will help us get users their info for the settings page
recordRoutes.route("/user/:id").get(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { "_id": req.params.id };
  db_connect.collection("user")
    .findOne(myquery, function (err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      //all data is sent in res.data
      response.json(res);
    });
});

recordRoutes.route("/user/:id").delete(function (req, response) {
  /**
   * remove user from every data entry they're associated with:
   * artist subscribers from every artist ✓
   * going and interested users from every event ✓
   * associated users from all notifications ✓
   * delete all their notifications ✓
   * followers from every user ✓
   * following from every user ✓
   * all incoming and outgoing requests ✓
   * their profile ✓
   */
  let user = req.params.id;
  let db_connect = dbo.getDb();
  function callback(err, res){
    if (err){
      console.log(err);
      throw err;
    }
  }
  // define array fields updateMany will check for each collection (only deletes
  // user in arrays, does not delete documents)
  let propsAssociated = {
    "artist": ["subscribedUsers"],
    "event": ["interestedUsers", "goingUsers"],
    "notification": ["associatedUsers"],
    "user": ["followers", "following", "outGoingFriendRequests", 
             "inComingfriendRequests"]
  };
  for(const prop in propsAssociated){
    for(i in propsAssociated[prop]){
      let curr_prop = propsAssociated[prop][i];
      db_connect.collection(prop).updateMany({}, {
        "$pull": {[curr_prop]:user}}, callback);
    }
  }
  // deleting documents
  db_connect.collection("notification").deleteMany({userId: user}, callback);
  db_connect.collection("user").deleteOne({_id: user}, function (err, res){
    if (err){
      console.log(err);
      throw err;
    }
    response.json(res);
  });
});

// This section will help add a user follower
// TODO: check if user is already followed?
recordRoutes.route("/follow").put(function (req, response) {
  let db_connect = dbo.getDb();
  db_connect.collection("user").updateOne({"_id":req.body.userId}, {
    $push: {
      following: req.body.followId
    }}, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("following added");
      // TODO: find out how to include multiple responses
      // response.json(res);
  });
  
  db_connect.collection("user").updateOne({"_id": req.body.followId}, {
    $push: {
      followers: req.body.userId
    }}, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("followed user")
      response.json(res);
    });  
});

// This section will help unfollow a user
// TODO: check if user is being followed?
recordRoutes.route("/unfollow").delete((req, response) => {
  let db_connect = dbo.getDb();
  db_connect.collection("user")
    .updateOne({"_id": req.body.userId}, {
      $pull: {
        following: req.body.followId
      }}, function (err, obj){
        if (err) {
          console.log(err);
          throw err;
        }
        console.log("1 user unfollowed");
        // TODO: find out how to include multiple responses
        // response.json(obj);
    });
  db_connect.collection("user")
    .updateOne({"_id": req.body.followId}, {
      $pull: {
        followers: req.body.userId
      }}, function (err, obj){
        if (err) {
          console.log(err);
          throw err;
        }
        console.log("1 user unfollowed");
        response.json(obj);
    });
});

// This section will help us get notifications
recordRoutes.route("/notification/:id").get(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { "userId": req.params.id };
  db_connect.collection("notification")
    .find(myquery)
    .toArray(function (err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      //all data is sent in res.data
      response.json(res);
    });
});

// This section will help add a notification
// NOTE: does this need other functionalities? i.e finding associated users
recordRoutes.route("/notification/add").put(function (req, response) {
  let db_connect = dbo.getDb();
  let new_notification = {
    'version': 1.2,
    'datetime': req.body.datetime,
    'type': req.body.type,
    'userId': req.body.userId,
    'associatedUsers': req.body.associatedUsers,
    'associatedArtists': req.body.associatedArtists,
    'associatedEvent': req.body.associatedEvent
  };
  db_connect.collection("notification")
    .insertOne(new_notification, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      response.json(res);
    });
});

// This section will help delete a notification
recordRoutes.route("/notification/delete/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = {"_id": ObjectId(req.params.id)};
  db_connect.collection("notification").deleteOne(myquery, function (err, obj){
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("notification deleted");
    response.json(obj);
  });
});

// This section will help us add concerts 
// NOTE: needs functionality to make sure concert isnt already added
recordRoutes.route("/concerts/add").put(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    _id : req.body._id,
    img: req.body.img,
    name: req.body.name,
    venueName: req.body.venueName,
    venueLocation: req.body.venueLocation,
    day: req.body.day,
    date: req.body.date,
    interestedUsers: [req.body.interestedUsers],
    goingUsers: [req.body.goingUsers],
  };
  db_connect.collection("event")
    .insertOne(myobj, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("Added a concert")
      response.json(res);
     });
});

// This section will help us get a user's going concerts
recordRoutes.route("/concerts/going/:id").get(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { "goingUsers": req.params.id };
  db_connect.collection("event")
    .find(myquery)
    .toArray(function (err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      //all data is sent in res.data
      response.json(res);
    });
});

// This section will help us get a user's interested concerts
recordRoutes.route("/concerts/interested/:id").get(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { "interestedUsers": req.params.id };
  db_connect.collection("event")
    .find(myquery)
    .toArray(function (err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      //all data is sent in res.data
      response.json(res);
    });
});

// This section will help us mutual friends and others going
recordRoutes.route("/concerts/interestedattendees/:id").get(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { "_id": req.params.id };
  db_connect.collection("event")
    .find(myquery)
    .toArray(function (err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      //all data is sent in res.data
      response.json(res);
    });
});

// TODO: write route that compares users
recordRoutes.route("user/:userId/:mutualId").get(function (req, reqponse) {
  let db_connect = dbo.getDb();
  let myquery = { "user": req.params.id };
  db_connect.collection("event")
    .find(myquery)
    .toArray(function (err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      //all data is sent in res.data
      response.json(res);
    });
})
module.exports = recordRoutes;