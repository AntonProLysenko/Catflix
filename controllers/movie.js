////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const Movie = require("../models/movie")


/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router()


////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

//=====
//INDEX 
//=====

//PROMICES
// router.get("/movies", (req, res) => {
//     // find all the fruits
//     Movie.find({})//PROMICE
//       // render a template after they are found
//       .then((movies) => {
//         res.render("movies/Index", { movies });
//       })
//       // send error as json if they aren't
//       .catch((error) => {
//         res.json({ error });
//       });
//   });

//CALLBACK
// router.get("/fruits", (req, res) => {
//     Fruit.find({}, (err, fruits) => {
//       res.render("fruits/Index", { fruits });
//     });
//   });

//Async AWAIT
router.get("/", async (req, res) => {
    try {
      const movies = await Movie.find({});
      res.render("movies/Index", { movies });
    } catch (err) {
      res.json({ err });
    }
  });



//=====
//NEW
//=====
router.get("/new", (req,res)=>{
    res.render("movies/New")
})


//DELETE
router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the fruit
    Movie.findByIdAndRemove(id)
      .then((movie) => {
        // redirect to main page after deleting
        res.redirect("/movies");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });




//=====
//UPDATE
//=====
 
router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      req.body.watchAgain = req.body.watchAgain === "on" ? true : false;
      req.body.cast = req.body.cast.split(",")
      await Movie.findByIdAndUpdate(id, req.body)
      res.redirect(`/movies/${id}`)
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  })
  
/////////
//CREATE
////////
router.post("/", async (req, res) => {
  try {
    req.body.watchAgain = req.body.watchAgain === "on" ? true : false;
    req.body.cast = req.body.cast.split(",")
    console.log(req.body)
    const createdMovie = await Movie.create(req.body)
    res.redirect("/movies")
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
})



//=====
//EDIT 
//=====
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the fruit from the database
    Movie.findById(id)
      .then((movie) => {
        // render Edit page and send fruit data


        res.render("movies/Edit.jsx", { movie });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

//=====
//SHOW 
//=====
router.get("/:id", async (req, res) => {
    const id = req.params.id
  
    try {
      const movie = await Movie.findById(id)
      res.render("movies/Show", { movie })
    } catch (error){
      console.log(error);
      res.json({ error });
    }
  })


///////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;