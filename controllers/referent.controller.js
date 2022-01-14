const db = require("../models");
const User = db.user;
const Post = db.post;
exports.findAllUserId = (req, res) => {
    const userId = req.params.userId;
    User.findAll({ where: { userId: userId } })
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