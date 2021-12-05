var express = require('express');
var router = express.Router();
const  mongoose = require("mongoose");
var ballondormodel = require('./models/ballondorSchema');
//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://yaya:yannis@football.tttzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});
/* create a ballon d'or */
router.post('/addone', function(req, res) {
  var newballondor = new ballondormodel();
     newballondor.Complete_name = req.body.Complete_name;
     newballondor.Country = req.body.Country;
     newballondor.Team = req.body.Team;
     newballondor.Position = req.body.Team;
     newballondor.Description = req.body.Description;
     newballondor.Year = req.body.Year;

     
     newStudent.save(function(err, data){
         if(err){
             console.log(error);
         }
         else{
             res.send("Data inserted");
         }
     });
  });

/* GET a ballon d'or */
  router.get('/findone', function(req, res) {
    ballondormodel.findOne({Year:{}}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

/* GET all ballon d'or */
router.get('/findall',function(req, res) {
  ballondormodel.find(function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
    }
});  
});

/* Update */
router.post('/update', function(req, res) {
  StudentModel.findByIdAndUpdate(req.body.id, 
  {Name:req.body.Complete_name}, function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
          console.log("Data updated!");
      }
  });  
});

/* Delete one */

router.post('/deleteid', function(req, res) {
  ballondormodel.findByIdAndDelete((req.body.id), 
  function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
          console.log("Data Deleted!");
      }
  });  
});

router.get('/delete', function(req, res) {
  ballondormodel.remove({Country:Argentina}, 
  function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
});


module.exports = router;
