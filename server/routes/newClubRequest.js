const express = require("express");
const newClubRequestRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

/**
 * @module routes/newClubRequest
 */

/** This section will help you get a list of all the club signup requests.
 *  @name /clubs/register-request
 */
 newClubRequestRoutes.route("/clubs/register-request").get(function (req, res) {
    let db_connect = dbo.getDb("main");
    db_connect
        .collection("club-registration-requests")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

/** This section will help you create a new club signup request.
 *  @name /clubs/register-request/create
 */
 newClubRequestRoutes.route("/clubs/register-request/create").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {

        clubName: req.body.clubName,
        clubEmail: req.body.email,
        clubPhone: req.body.phone,
        clubTags: req.body.tags,
        clubDesc: req.body.desc,

    };
    db_connect.collection("club-registration-requests").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});


module.exports = newClubRequestRoutes;