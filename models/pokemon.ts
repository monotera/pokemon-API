const { DataTypes, Model } = require("sequelize");
const sequelize = require("../util/database");

const Pokemon = sequelize.define(
  "pokemon",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_male: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Pokemon;
