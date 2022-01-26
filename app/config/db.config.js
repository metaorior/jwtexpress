module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "nodejs",
    dialect: "mysql",
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };