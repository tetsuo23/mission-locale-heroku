module.exports = (app) => {
    const users = require("../controllers/referent.controller");

    var router = require("express").Router();
  
    // Create a new Donnee
    // router.post("/", posts.createPost);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", posts.findOne);
  
    // Retrieve all Tutorials
    router.get("/:userId/:categorie", users.findAllUserIdAndCat);
     router.get("/:userId", users.findAllUserId);
     router.get("/", users.findAll);
  
    // ----------------------------------------------------------------------- //
  
   
  
    app.use("/api/users", router);
  };