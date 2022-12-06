/////////////////////////////////////////
// Dependencies
/////////////////////////////////////////

require("dotenv").config()
const express = require("express")//import express for our app
const morgan = require("morgan")//logs details for each page load
const methodOverride = require("method-override")//needed for swaping the method 
//const path = require("path")//we don't need it here, alow us to manipulate static pages
const session = require("express-session");
const MongoStore = require("connect-mongo");

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
//here we don't need a miidleware req,res,next next(), because Router has a build-in next() function

const middleware = (app) => {
    app.use(morgan("tiny")); //logging
    app.use(methodOverride("_method")); // override for put and delete requests from forms
    app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
    app.use(express.static("public")); // allow us to use public folder for static files
    app.use(session({// allows to store session object (req.session), we can store obj to store data between request. Perfect for storing info weather user loged in or not
    secret:process.env.SECRET,
    store:MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
    }))
}


///////////////////////////////////////////
// Export Middleware Function
//////////////////////////////////////////
module.exports = middleware;
