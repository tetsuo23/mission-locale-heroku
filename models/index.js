const config = require("../config/db.config.js");




const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.categorie = require('../models/categories.model')(sequelize, Sequelize)
db.postMobilite = require('../models/postMobilite.model')(sequelize, Sequelize)
db.postLogement = require('../models/postLogement.model')(sequelize, Sequelize)
db.postFinance = require('../models/postFinance.model')(sequelize, Sequelize)
db.postEmploi = require('../models/postEmploi.model')(sequelize, Sequelize)
db.postCitoyennete = require('../models/postCitoyennete.model')(sequelize, Sequelize)
 db.postSante = require('../models/postSante.model')(sequelize, Sequelize)


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// db.categorie.belongsToMany(db.user, {
//   through: "user_categories",
//   foreignKey: "categorieId",
//   otherKey: "userId"
// });
// db.user.belongsToMany(db.categorie, {
//   through: "user_categories",
//   foreignKey: "userId",
//   otherKey: "categorieId"
// });


// db.user.hasMany(db.post, {
//   as:'posts'
// });
// db.post.belongsTo(db.user, {
//   //  foreignKey:'UserId',
//   as: "user",
  
// })
db.ROLES = ["user", "beneficiaire","admin", "referent"];


module.exports = db;
