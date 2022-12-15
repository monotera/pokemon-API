const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Type = sequelize.define(
  "type",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    advantage: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    disadvantage: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Type;
export {};
