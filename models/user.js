//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");


////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////

// pull schema and model from mongoose
const {Schema, model} = mongoose;

// make user schema
const userShema = new Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

//make user model
const User = model("User", userShema)


///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports =User