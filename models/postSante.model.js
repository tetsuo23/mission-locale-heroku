 module.exports = (sequelize, Sequelize) => {
   const PostSante = sequelize.define("postsSante", {
     categorie: {
       type: Sequelize.STRING,
     },
     mois: {
       type: Sequelize.STRING,
     },
     userId: {
       type: Sequelize.STRING,
     },
     Sante_1: {
       type: Sequelize.INTEGER,
     },
     Sante_2: {
       type: Sequelize.INTEGER,
     },
     Sante_3: {
       type: Sequelize.INTEGER,
     },
     Sante_4: {
        type: Sequelize.INTEGER,
      },
      Sante_4_1: {
         type: Sequelize.STRING,
       },
      Sante_4_2: {
        type: Sequelize.STRING,
      },
      Sante_4_3: {
        type: Sequelize.STRING,
      },
      Sante_4_4: {
        type: Sequelize.STRING,
      },
      Sante_5: {
        type: Sequelize.INTEGER,
      },
      Sante_5_1: {
        type: Sequelize.STRING,
      },
      Sante_5_2: {
        type: Sequelize.STRING,
      },
      Sante_5_3: {
        type: Sequelize.STRING,
      }
   });

   return PostSante;
 };