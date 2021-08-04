const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    dob: { type: Date, required: true },
});

const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;