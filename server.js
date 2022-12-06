/////////////////////////////////////////////////////       
// //IMPORT OUR DEPENDANCIES
/////////////////////////////////////////////////////

const express = require("express")//import express for our app
const middleware = require("./utils/middleware")
const moviesController = require("./controllers/movie")//importing movies addresses to our service
const userController = require("./controllers/user")
const homeRouter = require("./controllers/home");


const app = express()//declaring that we are building express app



/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
middleware(app);



// ///////////////////////////////////////////////// .               
// // What replaces the routes
// ////////////////////////////////////////////////
app.use("/movies", moviesController)//puts /movies in front each route for moviesControler
app.use("/user", userController)
app.use("/", homeRouter)

//HOME route
app.get("/", (req, res) => {
    res.render("Index.jsx")
  });


///////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

    
