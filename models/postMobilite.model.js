module.exports = (sequelize, Sequelize) => {
  const PostMobilite = sequelize.define("postsMobilite", {
    categorie: {
      type: Sequelize.STRING,
    },
    mois: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.STRING,
    },
    Mobilite_question_1: {
      type: Sequelize.INTEGER,
    },
    Mobilite_question_2: {
      type: Sequelize.INTEGER,
    },
    Mobilite_question_3: {
      type: Sequelize.INTEGER,
    },
    Mobilite_question_4: {
      type: Sequelize.INTEGER,
    },
    Mobilite_question_5: {
      type: Sequelize.INTEGER,
    },
    Mobilite_question_6: {
      type: Sequelize.INTEGER,
    },
    total: {
      type: Sequelize.INTEGER,
    },
  });

  return PostMobilite;
};


