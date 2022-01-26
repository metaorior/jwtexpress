module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER
      },
        username: {
        type: Sequelize.STRING
      },     
      password: {
        type: Sequelize.STRING
      },
      game_token: {
          type: Sequelize.STRING
      },

    });
    return User;
  };