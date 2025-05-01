const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Pokemon extends Model {}

Pokemon.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  types: {
    type: DataTypes.JSON,
    allowNull: false,
    validate: {
      isValidTypes(value) {
        if (!Array.isArray(value)) {
          throw new Error('Types must be an array');
        }
      }
    }
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  abilities: {
    type: DataTypes.JSON,
    allowNull: false,
    validate: {
      isValidAbilities(value) {
        if (!Array.isArray(value)) {
          throw new Error('Abilities must be an array');
        }
      }
    }
  },
  front_sprite: {  
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  back_sprite: {   
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  official_artwork: { 
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  }
}, {
  sequelize,
  modelName: 'Pokemon',
  tableName: 'pokemons',
  timestamps: true,
  underscored: true
});

module.exports = Pokemon;