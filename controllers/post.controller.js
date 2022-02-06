const db = require("../models");
const User = db.user;
const PostMobilite = db.postMobilite;
const PostLogement = db.postLogement;
const PostFinance = db.postFinance;
const PostEmploi = db.postEmploi;
const PostCitoyennete = db.postCitoyennete;
const PostSante = db.postSante;

exports.createPost = (req, res) => {
  // Validate request
  if (!req.body.mois) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const postMobilite = {
    categorie: req.body.categorie,
    mois: req.body.mois,
    Mobilite_question_1: req.body.Mobilite_question_1,
    Mobilite_question_2: req.body.Mobilite_question_2,
    Mobilite_question_3: req.body.Mobilite_question_3,
    Mobilite_question_4: req.body.Mobilite_question_4,
    Mobilite_question_5: req.body.Mobilite_question_5,
    Mobilite_question_6: req.body.Mobilite_question_6,
    total: req.body.total,
    userId: req.body.userId,
  };

  // Save Tutorial in the database
  PostMobilite.create(postMobilite)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.createPostLogement = (req, res) => {
  // Validate request
  if (!req.body.mois) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const postLogement = {
    categorie: req.body.categorie,
    mois: req.body.mois,
    Logement_question_1: req.body.Logement_question_1,
    Logement_question_2_1: req.body.Logement_question_2_1,
    Logement_question_2_2: req.body.Logement_question_2_2,
    Logement_question_2_3: req.body.Logement_question_2_3,

    total: req.body.total,
    userId: req.body.userId,
  };

  // Save Tutorial in the database
  PostLogement.create(postLogement)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.createPostFinance = (req, res) => {
  // Validate request
  if (!req.body.mois) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const postFinance = {
    categorie: req.body.categorie,
    mois: req.body.mois,
    Finance_question_1: req.body.Finance_question_1,
    Finance_question_2: req.body.Finance_question_2,
    Finance_question_3_1: req.body.Finance_question_3_1,
    Finance_question_3_2: req.body.Finance_question_3_2,
    Finance_question_3_3: req.body.Finance_question_3_3,
    Finance_question_3_4: req.body.Finance_question_3_4,
    Finance_question_3_5: req.body.Finance_question_3_5,
    Finance_question_4_1: req.body.Finance_question_4_1,
    Finance_question_4_2: req.body.Finance_question_4_2,
    Finance_question_4_3: req.body.Finance_question_4_3,
    Finance_question_4_4: req.body.Finance_question_4_4,

    total: req.body.total,
    userId: req.body.userId,
  };

  // Save Tutorial in the database
  PostFinance.create(postFinance)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.createPostCitoyennete = (req, res) => {
  // Validate request
  if (!req.body.mois) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const postCitoyennete = {
    categorie: req.body.categorie,
    mois: req.body.mois,
    Citoyennete_1: req.body.Citoyennete_1,
    Citoyennete_1_1: req.body.Citoyennete_1_1,
    Citoyennete_1_2: req.body.Citoyennete_1_2,
    Citoyennete_1_3: req.body.Citoyennete_1_3,
    Citoyennete_1_4: req.body.Citoyennete_1_4,
    Citoyennete_1_5: req.body.Citoyennete_1_5,
    Citoyennete_2: req.body.Citoyennete_2,
    Citoyennete_2_1: req.body.Citoyennete_2_1,
    Citoyennete_2_2: req.body.Citoyennete_2_2,
    Citoyennete_2_3: req.body.Citoyennete_2_3,
    Citoyennete_2_4: req.body.Citoyennete_2_4,
    Citoyennete_2_5: req.body.Citoyennete_2_5,
    Citoyennete_2_6: req.body.Citoyennete_2_6,
    Citoyennete_2_7: req.body.Citoyennete_2_7,
    Citoyennete_3: req.body.Citoyennete_3,
    Citoyennete_4: req.body.Citoyennete_4,
    Citoyennete_5:  req.body.Citoyennete_5,
    Citoyennete_6:  req.body.Citoyennete_6,
    Citoyennete_7:  req.body.Citoyennete_7,
    Citoyennete_8:  req.body.Citoyennete_8,

    total: req.body.total,
    userId: req.body.userId,
  };

  // Save Tutorial in the database
  PostCitoyennete.create(postCitoyennete)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.createPostEmploi = (req, res) => {
  // Validate request
  if (!req.body.mois) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const postEmploi = {
    categorie: req.body.categorie,
    mois: req.body.mois,
    Emploi_1_1: req.body.Emploi_1_1,
    Emploi_1_2: req.body.Emploi_1_2,
    Emploi_1_3: req.body.Emploi_1_3,
    Emploi_1_4: req.body.Emploi_1_4,
    Emploi_1_5: req.body.Emploi_1_5,
    Emploi_1_6: req.body.Emploi_1_6,
    Emploi_1_7: req.body.Emploi_1_7,

    Emploi_2_1: req.body.Emploi_2_1,
    Emploi_2_2: req.body.Emploi_2_2,
    Emploi_2_3: req.body.Emploi_2_3,
    Emploi_2_4: req.body.Emploi_2_4,
    Emploi_2_5: req.body.Emploi_2_5,
    Emploi_2_6: req.body.Emploi_2_6,

    Emploi_3_1: req.body.Emploi_3_1,
    Emploi_3_2: req.body.Emploi_3_2,
    Emploi_3_3: req.body.Emploi_3_3,
    Emploi_3_4: req.body.Emploi_3_4,
    Emploi_3_5: req.body.Emploi_3_5,
    Emploi_3_6: req.body.Emploi_3_6,

    Emploi_4_1: req.body.Emploi_4_1,
    Emploi_4_2: req.body.Emploi_4_2,
    Emploi_4_3: req.body.Emploi_4_3,
    Emploi_4_4: req.body.Emploi_4_4,
    Emploi_4_5: req.body.Emploi_4_5,
    Emploi_4_6: req.body.Emploi_4_6,
    Emploi_4_7: req.body.Emploi_4_7,

    Emploi_5:  req.body.Emploi_5,
    Emploi_6:  req.body.Emploi_6,
    Emploi_7:  req.body.Emploi_7,

    total: req.body.total,
    userId: req.body.userId,
  };

  // Save Tutorial in the database
  PostEmploi.create(postEmploi)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.createPostSante = (req, res) => {
  // Validate request
  if (!req.body.mois) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const postSante = {
    categorie: req.body.categorie,
    mois: req.body.mois,
    Sante_1:   req.body.Sante_1,
    Sante_2:   req.body.Sante_2,
    Sante_3:   req.body.Sante_3,
    Sante_4:   req.body.Sante_4,
    Sante_4_1: req.body.Sante_4_1,
    Sante_4_2: req.body.Sante_4_2,
    Sante_4_3: req.body.Sante_4_3,
    Sante_4_4: req.body.Sante_4_4,
    Sante_5:   req.body.Sante_5,
    Sante_5_1: req.body.Sante_5_1,
    Sante_5_2: req.body.Sante_5_2,
    Sante_5_3: req.body.Sante_5_3,

    total: req.body.total,
    userId: req.body.userId,
  };

  // Save Tutorial in the database
  PostSante.create(postSante)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAllUserIdAndCat = (req, res) => {
  const userId = req.params.userId;
  const cat = req.params.categorie;
  PostMobilite.findAll({ where: { userId: userId, categorie: cat } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllUserIdAndCat2 = (req, res) => {
  const userId = req.params.userId;
  const cat = req.params.categorie;
  PostLogement.findAll({ where: { userId: userId, categorie: cat } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllUserIdAndCat3 = (req, res) => {
  const userId = req.params.userId;
  const cat = req.params.categorie;
  PostFinance.findAll({ where: { userId: userId, categorie: cat } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllUserIdAndCat4 = (req, res) => {
  const userId = req.params.userId;
  const cat = req.params.categorie;
  PostEmploi.findAll({ where: { userId: userId, categorie: cat } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllUserIdAndCat5 = (req, res) => {
  const userId = req.params.userId;
  const cat = req.params.categorie;
  PostCitoyennete.findAll({ where: { userId: userId, categorie: cat } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllUserIdAndCat6 = (req, res) => {
  const userId = req.params.userId;
  const cat = req.params.categorie;
  PostSante.findAll({ where: { userId: userId, categorie: cat } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllUserId = (req, res) => {
  const userId = req.params.userId;
  PostMobilite.findAll({ where: { userId: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findAllUserPost = (req, res) => {
  const userId = req.params.userId;
  const beneficiaire = req.params.prenom;

  PostMobilite.findAll({ where: { prenom: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findBeneficiaire = (req, res) => {
  const beneficiaire = req.params.beneficiaire;
  PostMobilite.findAll({ where: { userId: beneficiaire } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
