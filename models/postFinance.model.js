module.exports = (sequelize, Sequelize) => {
  const PostFinance = sequelize.define("postsFinance", {
    categorie: {
      type: Sequelize.STRING,
    },
    mois: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.STRING,
    },
    Finance_question_1: {
      type: Sequelize.INTEGER,
    },
    Finance_question_2: {
      type: Sequelize.INTEGER,
    },
    Finance_question_3_1: {
      type: Sequelize.STRING,
    },
    Finance_question_3_2: {
      type: Sequelize.STRING,
    },
    Finance_question_3_3: {
      type: Sequelize.STRING,
    },
    Finance_question_3_4: {
      type: Sequelize.STRING,
    },
    Finance_question_3_5: {
      type: Sequelize.STRING,
    },
    Finance_question_4_1: {
      type: Sequelize.STRING,
    },
    Finance_question_4_2: {
      type: Sequelize.STRING,
    },
    Finance_question_4_3: {
      type: Sequelize.STRING,
    },
    Finance_question_4_4: {
      type: Sequelize.STRING,
    },
    Finance_question_5: {
      type: Sequelize.INTEGER,
    },
    Finance_question_6: {
      type: Sequelize.INTEGER,
    },
    total: {
      type: Sequelize.INTEGER,
    },
  });

  return PostFinance;
};
