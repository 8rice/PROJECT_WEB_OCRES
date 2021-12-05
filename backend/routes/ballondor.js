var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var query = 'mongodb+srv://yaya:yannis'
    + '@football.tttzp.mongodb.net/FOOTBALL?'
    + 'retryWrites=true&w=majority'
var ballondormodel = require('../models/ballondor');

var cors = require('cors');

router.use(cors())


const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    }
});
/* create a ballon d'or */

router.get('/save', function (req, res) {
    var newballondor = new ballondormodel({
        Complete_name: 101
        , Country: "France", Team: "Barcelona", Position: "Midelfer", Description: 'aaaaa', Year: 2024
    });

    newballondor.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});
router.post('/addone', function (req, res) {
    var newballondor = new ballondormodel();
    newballondor.Complete_name = req.body.Complete_name;
    newballondor.Country = req.body.Country;
    newballondor.Team = req.body.Team;
    newballondor.Position = req.body.Team;
    newballondor.Description = req.body.Description;
    newballondor.Year = req.body.Year;


    newStudent.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});


router.get('/findone/:year', cors(), function (req, res) {
    ballondormodel.findOne({ Year: req.params.year },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});

/*GET a ballon d'or*/

/* GET all ballon d'or */
router.get('/findall', function (req, res) {
    ballondormodel.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

/* Update */
router.post('/update', function (req, res) {
    ballondormodel.findByIdAndUpdate(req.body.id,
        { Name: req.body.Complete_name }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

/* Delete one */

router.post('/deleteid', function (req, res) {
    ballondormodel.findByIdAndDelete((req.body.id),
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
});

router.get('/delete', function (req, res) {
    ballondormodel.remove({ Country: Argentina },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});
/*
var ballondormodel = require('../models/ballondor.js');
//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://yaya:yannis@football.tttzp.mongodb.net/FOOTBALL?retryWrites=true&w=majority";
// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

mongoose.Promise = global.Promise;

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});
*/

module.exports = router;
