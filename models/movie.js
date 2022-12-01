//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection")

/////////////////////////////////////////////////
// Our Model
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose;
// make movie schema
const movieSchema = new Schema({
  title: {type:String, required:true},
  releaseDate: String,
  length: Number,
  genre:String,
  poster:{type:String, required:true},
  director:String,
  raiting:String,
  watchAgain:Boolean,
  cast:[{type:String}],
  rating:String
});
// make fruit model
const Movie = model("Movie", movieSchema);

/////////////////////////////////////////////////////
// Export the Connection
////////////////////////////////////////////////////
module.exports = Movie