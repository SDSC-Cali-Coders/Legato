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