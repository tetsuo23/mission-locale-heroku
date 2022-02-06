const db = require("../models");
const User = db.user;

exports.findAllUserId = (req, res) => {
    const prenom = req.params.userId;
    User.findAll({ where: { prenom: prenom } })
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

  exports.findBeneficiaire = (req, res) => {
    const prenom = req.params.userId;
    const user = req.params.beneficiaire;
    User.findAll({ where: {  prenom:user } })
    
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });console.log(user);
  };