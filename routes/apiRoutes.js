var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var db = require('../config/connection');
var Jobs = require('../models/jobs');
var piggyBank = require('../models/piggyBank');
var parentsDashboard = require('../models/parents');
var childrenDashboard = require('../models/children');

//Parents sign in
router.get('/signin', (req, res) => {
    console.log("** route ** signin **"),
        parentsDashboard.findAll().then(parents => {
            console.log(parents);
            res.render('partials/signIn', {
                parents
            })
        })
            .catch(err => console.log(err))
});

// get job listings
router.get('/jobslist', (req, res) => {
    console.log("** route ** jobs **"),
        Jobs.findAll().then(jobs => {
            console.log(jobs);
            res.render('partials/viewJobs', {
                jobs
            })
        })
            .catch(err => console.log(err))
});

//route to view piggy bank page
router.get('/piggybank', (req, res) => {
    console.log("** route ** piggy bank **"),
        piggyBank.findAll().then(piggy_bank => {
            console.log(piggy_bank);
            res.render('partials/piggyBank', {
                piggy_bank
            })
        })
            .catch(err => console.log(err))
});

//route to view overview page
router.get('/overview', (req, res) => {
    console.log("** route ** overview **"),
        parentsDashboard.findAll().then(parents => {
            console.log(parents);
            res.render('partials/overview', {
                parents
            })
        })
            .catch(err => console.log(err))
});

//route to view children's dashboard page
router.get('/children_dashboard', (req, res) => {
    console.log("** route ** child dashboard **"),
        childrenDashboard.findAll().then(children => {
            console.log(children);
            res.render('partials/children', {
                children
            })
        })
            .catch(err => console.log(err))
});

//route to register account
router.get('/register', (req, res) => {
    console.log("** route ** register **"),
        parentsDashboard.findAll().then(parents => {
            console.log(parents);
            res.render('partials/signUp', {
                parents
            })
        })
            .catch(err => console.log(err))
});

// Add a job in add a job page
router.get('/addjobs', (req, res) => {
    console.log("** route ** addjobs **"),
        Jobs.findAll().then(addjobs => {
            console.log(addjobs);
            res.render('partials/addJobs', {
                addjobs
            })
        })
            .catch(err => console.log(err))
});
router.post('/addjobs', (req, res) => {
    var { name, description, adult_user_id, child_id, earning_amount, status, piggy_bank_id } = req.body;
    var errors = [];

    //Validate Fields
    if (!name) {
        errors.push({ text: "Please add a name for the job" });
    };
    if (!description) {
        errors.push({ text: "Please describe the job in detail" });
    };
    if (!adult_user_id) {
        errors.push({ text: "Please indicate your ID" });
    };
    if (!child_id) {
        errors.push({ text: "Please assign the job to a child" });
    };
    if (!earning_amount) {
        errors.push({ text: "Please give the job a value" });
    };
    if (!status) {
        errors.push({ text: "Please give the job a status" });
    };
    if (!piggy_bank_id) {
        errors.push({ text: "Please assign piggy bank" });
    };

    //Check for errors
    if (errors.length > 0) {
        res.render('addJobs', {
            errors,
            name,
            description,
            adult_user_id,
            child_id,
            earning_amount,
            status,
            piggy_bank_id
        });
    }   else {
        if(!earning_amount) {
            earning_amount = 'Unknown';
        } else {
            earning_amount = '$${earning_amount}';
        }

        

        //Insert into model/table
        Jobs.create({
            name,
            description,
            adult_user_id,
            child_id,
            earning_amount,
            status,
            piggy_bank_id
        })
            .then(jobs => res.redirect('/jobs'))
            .catch(err => console.log(err));
    }});

    //Add a child in add child page
    router.get('/addchild', (req, res) => {
        console.log("** route ** addchild **"),
            childrenDashboard.findAll().then(addchild => {
                console.log(addchild);
                res.render('partials/addChild', {
                    addchild
                })
            })
                .catch(err => console.log(err))
    });


    module.exports = router
