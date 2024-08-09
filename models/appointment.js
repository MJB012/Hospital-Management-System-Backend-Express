'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.CaseType);
      Appointment.belongsTo(models.AppointmentType);
      Appointment.belongsTo(models.PracticeLocation);
      Appointment.belongsTo(models.Speciality);
    }
  }
  Appointment.init({
    case_id: DataTypes.INTEGER,
    appointment_type_id: DataTypes.INTEGER,
    practice_id: DataTypes.INTEGER,
    speciality_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    appointment_date: DataTypes.DATE,
    appointment_time_id: DataTypes.TIME,
    duration: DataTypes.TIME,
    confirmed: DataTypes.BOOLEAN,
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
    modelName: 'Appointment',
    paranoid: true,
  });
  return Appointment;
};