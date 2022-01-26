const req = require("express/lib/request");
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Token extends Model {}

Token.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    heroName: {
      type: DataTypes.JSON,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
    },
    game_token: {
      type: DataTypes.STRING,
      primaryKey: false,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    tableName: 'users',
    modelName: 'users',
  }
);

module.exports = Token;
