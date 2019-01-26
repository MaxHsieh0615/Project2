var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var db = require('../config/connection');
var Jobs = require('../models/jobs');
var piggyBank = require('../models/piggyBank');
var parentsDashboard = require('../models/parents');
var childrenDashboard = require('../models/children');


// get job listings
router.get('/jobs', (req, res) => {
    console.log("** route ** jobs **"),
    Jobs.findAll().then(jobs => { 
        console.log(jobs);
        res.render('partials/viewJobs', { 
            jobs }) 
        })
        .catch(err => console.log(err))
    });


//route to view piggy bank page
router.get('/piggybank', (req, res) => {
    console.log("** route ** piggy bank **"),
    piggyBank.findAll().then(piggy_bank => { 
        console.log(piggy_bank);
        res.render('partials/piggyBank', { 
            piggy_bank }) 
        })
        .catch(err => console.log(err))
    });

//route to view parents' dashboard page
router.get('/parents_dashboard', (req, res) => {
    console.log("** route ** parents dashboard **"),
    parentsDashboard.findAll().then(parents => { 
        console.log(parents);
        res.render('partials/parents', { 
            parents }) 
        })
        .catch(err => console.log(err))
    });

//route to view children's dashboard page
router.get('/children_dashboard', (req, res) => {
    console.log("** route ** child dashboard **"),
    childrenDashboard.findAll().then(children => { 
        console.log(children);
        res.render('partials/children', { 
            children }) 
        })
        .catch(err => console.log(err))
    });

// route to index/landing page
//app.get('/' , (req, res) =>
//    );

// add a job

module.exports = router;

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };