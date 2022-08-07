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
    recGenres: req.body.recGenres,
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

// This section will help add a user follower
// FIXME
recordRoutes.route("/user/follow").put(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery1 = {"_id":req.body.userId}
  let myquery2 = {"_id": req.body.followId}
  let newfollow1 = {
    $push: {
      followers: req.body.followId
    }};
  let newfollow2 = {
    $push: {
      following: req.body.userId
    }
  }
  db_connect.collection("user")
    .updateOne(myquery1, newfollow1, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("1 follower added")
      response.json(res);
    });
  db_connect.collection("user")
    .updateOne(myquery2, newfollow2, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("1 follower added")
      response.json(res);
    });
});

// This section will help unfollow a user
// TODO: update follower/following arrays on both ends
// FIXME
recordRoutes.route("/user/follow").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = {"_id": req.body.userId};
  let newvalues = {
    $pullAll: {
      following: req.body.followId
    }};
  db_connect.collection("user")
    .updateOne(myquery, function (err, obj){
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
    venueName: req.body.venueName,
    date: req.body.date,
    associatedArtists: req.body.associatedArtists,
    interestedUsers: [req.body.interestedUsers],
    goingUsers: [req.body.goingUsers],
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  db_connect.collection("event")
    .insertOne(myobj, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      response.json(res);
     });
});

module.exports = recordRoutes;