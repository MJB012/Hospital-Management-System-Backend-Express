'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Speciality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Speciality.hasMany(models.User, {foreignKey: 'speciality_id'});
      Speciality.hasMany(models.Appointment, {foreignKey: 'speciality_id'})
    }
  }
  Speciality.init({
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Speciality',
    paranoid: true,
  });
  return Speciality;
};