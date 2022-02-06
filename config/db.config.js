// module.exports = {
//   HOST: "eu-cdbr-west-02.cleardb.net",
//   USER: "b491b9025e19f2",
//   PASSWORD: "b321590a",
//   DB: "heroku_22b5d437e03dd64",
//    dialect: "mysql",
//    pool: {
//      max: 5,
//      min: 0,
//      acquire: 30000,
//      idle: 10000
//    }
// };

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: null,
  DB: "mission_locale",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};