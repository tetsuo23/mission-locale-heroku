module.exports = (sequelize, Sequelize) => {
    const PostLogement = sequelize.define("postsLogement", {
      categorie: {
          type : Sequelize.STRING
      },
      mois: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      Logement_question_1: {
        type: Sequelize.INTEGER
      },
      Logement_question_2_1: {
        type: Sequelize.STRING
      },
      Logement_question_2_2: {
        type: Sequelize.STRING
      },
      Logement_question_2_3: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      }
    });
  
    return PostLogement;
  };