'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PracticeLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PracticeLocation.hasMany(models.User, {foreignKey: 'practice_location_id'});
      PracticeLocation.hasMany(models.Appointment, { foreignKey: 'practice_location_id' });
    }
  }
  PracticeLocation.init({
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PracticeLocation',
    paranoid: true,
  });
  return PracticeLocation;
};