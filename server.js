const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
require("dotenv").config();


const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// ------------------------------------------------------------------------

// database
const db = require("./models");
const Role = db.role;
const Cate = db.categorie;
const PostMobilite = db.postMobilite;
const PostLogement = db.postLogement;

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// ------------------------------------------------------------------------


// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();

});


app.get('/api/:prenom', (req,res) => {
  var prenom = req.params.prenom;
  console.log(prenom);
})

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
// require("./app/routes/donnees.routes")(app);
require("./routes/donnee.routes")(app);
// require("./routes/post.routes")(app);
require("./routes/referent.routes")(app);


//  run();
//  simple route
 app.get("/", (req, res) => {
   res.json({ message: "Welcome to bezkoder application." });
 });

 // Have Node serve the files for our built React app
 app.use(express.static(path.resolve(__dirname, './front/build')));

 // All other GET requests not handled before will return our React app
 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, './front','./front/build', 'index.html'));
 });



function initial() {
  // Role.create({
  //   id: 1,
  //   name: "user"
  // });

  // Role.create({
  //   id: 2,
  //   name: "referent"
  // });

  // Role.create({
  //   id: 3,
  //   name: "admin"
  // });

  // Role.create({
  //   id: 4,
  //   name: "beneficiaire"
  // });

  // Cate.create({
  //   id:1,
  //   cat:'emploi'
  // })

  // Cate.create({
  //   id:2,
  //   cat:'logement'
  // })

  // Cate.create({
  //   id:3,
  //   cat:'finance'
  // })

  // Cate.create({
  //   id:4,
  //   cat:'citoyennete'
  // })

  // Cate.create({
  //   id:5,
  //   cat:'santé'
  // })

  // Cate.create({
  //   id:6,
  //   cat:'mobilite'
  // })

  // Fin.create({})

  

}