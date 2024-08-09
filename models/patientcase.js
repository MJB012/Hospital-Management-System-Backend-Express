'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientCase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PatientCase.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
      // define association here
      PatientCase.belongsTo(models.Category, { foreignKey: 'category_id' });
      PatientCase.belongsTo(models.PurposeOfVisit, { foreignKey: 'purpose_of_visit_id' });
      PatientCase.belongsTo(models.CaseType, { foreignKey: 'case_type_id' });
      PatientCase.belongsTo(models.Insurance, { foreignKey: 'insurance_id' });
      PatientCase.belongsTo(models.Firm, { foreignKey: 'firm_id' });
      PatientCase.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  PatientCase.init({
    doa: DataTypes.DATE,
    purpose_of_visit: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    purpose_of_visit_id: DataTypes.INTEGER,
    case_type_id: DataTypes.INTEGER,
    insurance_id: DataTypes.INTEGER,
    firm_id: DataTypes.INTEGER,
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
    paranoid: true,
    modelName: 'PatientCase',
    tableName: 'patient_cases'
  });
  return PatientCase;
};