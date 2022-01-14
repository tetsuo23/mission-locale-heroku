const db = require("../models");
const User = db.user;
const Post = db.post;
exports.findAllUserId = (req, res) => {
    const userId = req.params.userId;
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.findAll = (req, res) => {
    const mois = req.body.mois;
    
  
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };