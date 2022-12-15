const {DataTypes} = require("sequelize");
const sequelize = require("../util/database");

const Pokemon = sequelize.define(
    "pokemon",
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
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_male: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {timestamps: false}
);

module.exports = Pokemon;
export {};
