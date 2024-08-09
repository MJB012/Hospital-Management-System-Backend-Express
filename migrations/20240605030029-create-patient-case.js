'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PatientCases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doa: {
        type: Sequelize.DATE
      },
      purpose_of_visit: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      category_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      purpose_of_visit_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'PurposeOfVisits',
          key: 'id'
        }
      },
      case_type_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'CaseTypes',
          key: 'id'
        }
      },
      insurance_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Insurances',
          key: 'id'
        }
      },
      firm_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Firms',
          key: 'id'
        }
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
    await queryInterface.dropTable('PatientCases');
  }
};