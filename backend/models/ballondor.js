
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const ballondorSchema = new Schema({
    Complete_name: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    Team: {
        type: String,
        required: true
    },
    Position: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }


});


// create and export model
module.exports = mongoose.model("ballondor", ballondorSchema, "gold-players");