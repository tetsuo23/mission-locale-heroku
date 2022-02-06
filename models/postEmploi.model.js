module.exports = (sequelize, Sequelize) => {
    const PostEmploi = sequelize.define("postsEmploi", {
      categorie: {
        type: Sequelize.STRING,
      },
      mois: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
      },
      Emploi_1_1: {
       type: Sequelize.STRING,
     },
     Emploi_1_2: {
       type: Sequelize.STRING,
     },
     Emploi_1_3: {
       type: Sequelize.STRING,
     },
     Emploi_1_4: {
       type: Sequelize.STRING,
     },
     Emploi_1_5: {
       type: Sequelize.STRING,
     },
     Emploi_1_6: {
       type: Sequelize.STRING,
     },
     Emploi_1_7: {
       type: Sequelize.STRING,
     },
     Emploi_2_1: {
       type: Sequelize.STRING,
     },
     Emploi_2_2: {
       type: Sequelize.STRING,
     },
     Emploi_2_3: {
       type: Sequelize.STRING,
     },
     Emploi_2_4: {
       type: Sequelize.STRING,
     },
     Emploi_2_5: {
       type: Sequelize.STRING,
     },
     Emploi_2_6: {
       type: Sequelize.STRING,
     },
     Emploi_3_1: {
       type: Sequelize.STRING,
     },
     Emploi_3_2: {
       type: Sequelize.STRING,
     },
     Emploi_3_3: {
       type: Sequelize.STRING,
     },
     Emploi_3_4: {
       type: Sequelize.STRING,
     },
     Emploi_3_5: {
       type: Sequelize.STRING,
     },
     Emploi_3_6: {
       type: Sequelize.STRING,
     },
     Emploi_4_1: {
       type: Sequelize.STRING,
     },
     Emploi_4_2: {
       type: Sequelize.STRING,
     },
     Emploi_4_3: {
       type: Sequelize.STRING,
     },
     Emploi_4_4: {
       type: Sequelize.STRING,
     },
     Emploi_4_5: {
       type: Sequelize.STRING,
     },
     Emploi_4_6: {
       type: Sequelize.STRING,
     },
     Emploi_4_7: {
       type: Sequelize.STRING,
     },
      Emploi_5: {
        type: Sequelize.INTEGER,
      },
      Emploi_6: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.INTEGER,
      },
    });
 
    return PostEmploi;
  };