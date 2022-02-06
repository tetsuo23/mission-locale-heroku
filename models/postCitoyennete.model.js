module.exports = (sequelize, Sequelize) => {
    const PostCitoyennete = sequelize.define("postsCitoyennete", {
      categorie: {
        type: Sequelize.STRING,
      },
      mois: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
      },
      Citoyennete_1_1: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_1_2: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_1_3: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_1_4: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_1_5: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_2_1: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_2_2: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_2_3: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_2_4: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_2_5: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_2_6: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_2_7: {
       type: Sequelize.INTEGER,
     },
      Citoyennete_3: {
        type: Sequelize.INTEGER,
      },
      Citoyennete_4: {
        type: Sequelize.INTEGER,
      },
      Citoyennete_5: {
        type: Sequelize.INTEGER,
      },
      Citoyennete_6: {
        type: Sequelize.INTEGER,
      },
      Citoyennete_7: {
       type: Sequelize.INTEGER,
     },
     Citoyennete_8: {
       type: Sequelize.INTEGER,
     },
      total: {
        type: Sequelize.INTEGER,
      },
    });
 
    return PostCitoyennete;}