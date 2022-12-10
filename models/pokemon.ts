const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL);

class Pokemon extends Model {
  declare name: String;
  declare weight: Number;
  declare is_male: Boolean;
}

Pokemon.init(
  {
    // Model attributes are defined here
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
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "pokemon", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(Pokemon === sequelize.models.Pokemon); // true
