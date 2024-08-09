'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      case_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'CaseTypes',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      appointment_type_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'AppointmentTypes',
          key: 'id'
        }
      },
      practice_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'PracticeLocations',
          key: 'id'
        }
      },
      doctor_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      appointment_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      appointment_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};