'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurposeOfVisit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PurposeOfVisit.hasMany(models.PatientCase, { foreignKey: 'purpose_of_visit_id' });
    }
  }
  PurposeOfVisit.init({
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updated_at"
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "deleted_at"
    }
  }, {
    sequelize,
    modelName: 'PurposeOfVisit',
    paranoid: true,
    tableName: 'purpose_of_visits'
  });
  return PurposeOfVisit;
};