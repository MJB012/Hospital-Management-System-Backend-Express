'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CaseType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CaseType.hasMany(models.PatientCase, { foreignKey: 'case_type_id' });
      CaseType.hasMany(models.Appointment, { foreignKey: 'case_id' });
    }
  }
  CaseType.init({
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
    modelName: 'CaseType',
    paranoid: true,
    tableName: 'case_types'
  });
  return CaseType;
};