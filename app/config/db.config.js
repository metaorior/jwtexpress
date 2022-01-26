module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
