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
  let myquery = { "userID": req.params.id };
  db_connect.collection("user")
    .findOne(myquery, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
       res.json(result);
     });
});

// This section will help us get notifications
recordRoutes.route("/notification/:id").get(function (req, response) {
  let db_connect = dbo.getDb();
  //TODO fix id issues later
  let myquery = { "userID": req.params.id };
  db_connect.collection("notification")
    .findOne(myquery, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
       res.json(result);
     });
});

// This section will help us get concerts near a user
recordRoutes.route("/concerts/nearby/:id").get(function (req, response) {
  let db_connect = dbo.getDb();
  //TODO fix id issues later
  let myquery = { "_id": req.params.id };
  db_connect.collection("user")
    .findOne(myquery, function (err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
       res.json(result);
       //get zipcode from user and then find concerts near that zipcode
       db_connect.collection("event")
     });

  
});

module.exports = recordRoutes;