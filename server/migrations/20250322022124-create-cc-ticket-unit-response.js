'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CcTicketUnitResponses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      ticket_id: {
        type: Sequelize.STRING
      },
      user_group: {
        type: Sequelize.STRING
      },
      response_by: {
        type: Sequelize.STRING
      },
      pickup_time: {
        type: Sequelize.DATE
      },
      response_time: {
        type: Sequelize.DATE
      },
      response_status: {
        type: Sequelize.STRING
      },
      response_description: {
        type: Sequelize.TEXT
      },
      currative_solution: {
        type: Sequelize.TEXT
      },
      preventive_solution: {
        type: Sequelize.TEXT
      },
      attachment: {
        type: Sequelize.STRING
      },
      ip_address: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('CcTicketUnitResponses');
  }
};