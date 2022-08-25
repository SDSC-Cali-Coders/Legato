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
    _id: req.body._id,
    name: req.body.name,
    lowercase_name: req.body.lowercase_name,
    img: req.body.img,
    topArtists: req.body.topArtists,
    topSongs: req.body.topSongs,
    topGenres: req.body.topGenres,
    topGenreId: req.body.topGenreId,
    linkedSocials: { facebook: null , instagram: null, twitter: null, pinterest: null },
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
      console.log("User exists, will now update");
      var newvalues = {
        $set: {
          name: req.body.name,
          lowercase_name: req.body.lowercase_name,
          img: req.body.img,
          topArtists: req.body.topArtists,
          topSongs: req.body.topSongs,
          topGenres: req.body.topGenres,
          topGenreId: req.body.topGenreId,
        }
      };
      db_connect.collection("user").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
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

// This section will help us get user's by their id
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
      console.log("got your user")
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
  function callback(err, res) {
    if (err) {
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
  for (const prop in propsAssociated) {
    for (i in propsAssociated[prop]) {
      let curr_prop = propsAssociated[prop][i];
      db_connect.collection(prop).updateMany({}, {
        "$pull": { [curr_prop]: user }
      }, callback);
    }
  }
  // deleting documents
  db_connect.collection("notification").deleteMany({ userId: user }, callback);
  db_connect.collection("user").deleteOne({ _id: user }, function (err, res) {
    if (err) {
      console.log(err);
      throw err;
    }
    response.json(res);
  });
});

recordRoutes.route("/visibility").patch(function (req, response) {
  let db_connect = dbo.getDb();
  db_connect.collection("user").updateOne({"_id": req.body.id}, {
    isPrivateAccount: req.body.visible
  }, function (err, res) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("changed visibility to" + req.body.visibilty);
    response.json(res);
  });
});

// This section will help add a user follower
// TODO: check if user is already followed?
recordRoutes.route("/follow").put(function (req, response) {
  let db_connect = dbo.getDb();
  db_connect.collection("user").updateOne({ "_id": req.body.userId }, {
    $push: {
      following: req.params.followId
    }
  }, function (err, res) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("following added");
    // TODO: find out how to include multiple responses
    // response.json(res);
  });

  db_connect.collection("user").updateOne({ "_id": req.params.followId }, {
    $push: {
      followers: req.body.userId
    }
  }, function (err, res) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("followed user")
    response.json(res);
  });

  let follow_request = {
    'version': 1.3,
    'datetime': req.body.datetime,
    'type': "newFollower",
    'userId': req.body.userId,
    'associatedUsers': [req.params.followId],
    'associatedArtists': [],
    'associatedEvent': null
  };
  db_connect.collection("notification")
    .insertOne(follow_request, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      response.json(res);
    });
});

// This section will help unfollow a user
// TODO: check if user is being followed?
recordRoutes.route("/unfollow").delete((req, response) => {
  let db_connect = dbo.getDb();
  db_connect.collection("user")
    .updateOne({ "_id": req.body.userId }, {
      $pull: {
        following: req.body.followId
      }
    }, function (err, obj) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("1 user unfollowed");
      // TODO: find out how to include multiple responses
      // response.json(obj);
    });
  db_connect.collection("user")
    .updateOne({ "_id": req.body.followId }, {
      $pull: {
        followers: req.body.userId
      }
    }, function (err, obj) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("1 user unfollowed");
      response.json(obj);
    });
});

recordRoutes.route("/recommend-friends/:id").get((req, response) => {
  /**
   * recommender v1.0
   * uses the toal mutual friends, artists, and concerts to recommend new users
   */
  let db_connect = dbo.getDb();
  db_connect.collection("user").find({}).toArray().then((data) => {
    let userIndex;
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id == req.params.id) {
        userIndex = i;
        break;
      }
    }
    let recommendedUsers = [];
    // inefficient way
    for (let i = 0; i < data.length; i++) {
      if (i != userIndex && !data[userIndex].following.includes(data[i]._id)) {
        let friend = {
          id: data[i]._id,
          following: 0,
          subscribedArtists: 0,
          goingEvents: 0
        }
        for (const feature of ["following", "subscribedArtists", "goingEvents"]) {
          for (let j = 0; j < data[userIndex][feature].length; j++)
            if (data[i][feature].includes(data[userIndex][feature][j]))
              friend[feature]++;
        }
        friend["_tot"] = friend.following + friend.subscribedArtists + friend.goingEvents;
        if (friend._tot != 0) recommendedUsers.push(friend);
      }
    }
    recommendedUsers.sort((a, b) => b._tot - a._tot);
    response.json(recommendedUsers);
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
  let myquery = { "_id": ObjectId(req.params.id) };
  db_connect.collection("notification").deleteOne(myquery, function (err, obj) {
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
    _id: req.body._id,
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
  db_connect.collection("user")
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

// This section will help us get user's by their name
recordRoutes.route("/friends/:name").get(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { "lowercase_name": req.params.name };
  db_connect.collection("user")
    .find(myquery)
    .toArray(function (err, res) {
      if (err) {
        console.log(err);
        return err;
      }
      //all data is sent in res.data
      console.log("got your user")
      response.json(res);
    });
});


// This section will help us add social media links to a user's profile 
recordRoutes.route("/user/socials/:id").put(function (req, response) {
  let db_connect = dbo.getDb();
  let newValues = {
    $set: {
      linkedSocials: req.body.linkedSocials,
    }
  };
  let myquery = { _id: req.body._id };
  db_connect.collection("user")
    .updateOne(myquery, newValues, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("one document updated");
    });
});
module.exports = recordRoutes;