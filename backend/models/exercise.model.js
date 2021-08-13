const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    mobile: { type: Number, required: true },
    dob: { type: Date, required: true },
});

exerciseSchema.path('email').validate(async (email)=>{
   const emailCount = await mongoose.models.Exercise.countDocuments({email})
   return !emailCount
},'Email already exist')

const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;