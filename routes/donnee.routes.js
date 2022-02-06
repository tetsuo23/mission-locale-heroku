module.exports = (app) => {
  const posts = require("../controllers/post.controller");

  var router = require("express").Router();

  // Create a new Donnee
  router.post("/fin/", posts.createPostFinance);
   router.post("/log/", posts.createPostLogement);
   
   router.post("/emp/", posts.createPostEmploi);
   router.post("/cit/", posts.createPostCitoyennete);
   router.post("/san/", posts.createPostSante);
  router.post("/", posts.createPost);
  
  // router.post("/logement/", posts.createPostLogement);


  // Retrieve a single Tutorial with id
  // router.get("/:id", posts.findOne);

  // Retrieve all Tutorials
  router.get("/mobilite/:userId/:categorie", posts.findAllUserIdAndCat);
  router.get("/logement/:userId/:categorie", posts.findAllUserIdAndCat2);
  router.get("/finance/:userId/:categorie", posts.findAllUserIdAndCat3);
  router.get("/emploi/:userId/:categorie", posts.findAllUserIdAndCat4);
  router.get("/citoyennete/:userId/:categorie", posts.findAllUserIdAndCat5);
  router.get("/sante/:userId/:categorie", posts.findAllUserIdAndCat6);
   router.get("/:userId", posts.findAllUserId);
   router.get("/search/:userId", posts.findAllUserPost);
   router.get("/:userId/referent/:beneficiaire", posts.findBeneficiaire);

  // ----------------------------------------------------------------------- //

 

  app.use("/api/posts", router);
  app.use("/api/postsLogement", router);
  app.use("/api/postsFinance", router);
  app.use("/api/postsEmploi", router);
  app.use("/api/postsCitoyennete", router);
  app.use("/api/postsSante", router);
};
