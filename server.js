/////////////////////////////////////////////////////       
// //IMPORT OUR DEPENDANCIES
/////////////////////////////////////////////////////

const express = require("express")//import express for our app
const app = express()//declaring that we are building express app
const morgan = require("morgan")//logs details for each page load
const methodOverride = require("method-override")//needed for swaping the method 
const moviesController = require("./controllers/movie")//importing movies addresses to our service
const userController = require("./controllers/user")
//const path = require("path")//we don't need it here, alow us to manipulate static pages


/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////


app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
//here we don't need a miidleware req,res,next next(), because Router has a build-in next() function
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // allow us to use public folder for static files


// ///////////////////////////////////////////////// .               
// // What replaces the routes
// ////////////////////////////////////////////////
app.use("/movies", moviesController)//puts /movies in front each route for moviesControler
app.use("/user", userController)

//HOME route
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
  });


///////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

    
