const Sequelize = require("sequelize");

// if (process.env.JAWSDB_URL) {
//   // for Heroku
//   sequelize = new Sequelize(process.env.JAWSDB_URL, {});
// } else {
//   require("dotenv").config();
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
      
//     }
//   );
// }

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
      username: "root",
      password: "",
      database: "blog_db",
      dialect: "mysql",
      port: 3306,
  }
);

module.exports = sequelize;
