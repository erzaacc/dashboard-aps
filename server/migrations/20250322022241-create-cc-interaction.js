'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CcInteractions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      npk: {
        type: Sequelize.STRING
      },
      inbound_source: {
        type: Sequelize.STRING
      },
      inbound_source_id: {
        type: Sequelize.STRING
      },
      interaction_type: {
        type: Sequelize.STRING
      },
      interaction_category: {
        type: Sequelize.INTEGER
      },
      interaction_sub_category: {
        type: Sequelize.INTEGER
      },
      interaction_sub_sub_category: {
        type: Sequelize.INTEGER
      },
      interaction_sub_sub_sub_category: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      agent_answer: {
        type: Sequelize.TEXT
      },
      interaction_status: {
        type: Sequelize.STRING
      },
      request_by: {
        type: Sequelize.STRING
      },
      branch: {
        type: Sequelize.STRING
      },
      workstation_id: {
        type: Sequelize.STRING
      },
      ip_address: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      extension: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      attachment: {
        type: Sequelize.STRING
      },
      sa_name: {
        type: Sequelize.STRING
      },
      complaint_type: {
        type: Sequelize.STRING
      },
      ticket_reference: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      created_time: {
        type: Sequelize.DATE
      },
      flexible_field: {
        type: Sequelize.TEXT
      },
      pir: {
        type: Sequelize.STRING
      },
      id_pir: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('CcInteractions');
  }
};