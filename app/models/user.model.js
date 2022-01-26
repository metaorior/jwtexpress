module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        defaultValue: Sequelize.literal( 'uuid_generate_v4()' )
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