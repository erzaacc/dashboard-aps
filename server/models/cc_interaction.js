"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const CcInteraction = sequelize.define(
    "CcInteraction",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      npk: {
        type: DataTypes.STRING,
      },
      inbound_source: {
        type: DataTypes.STRING,
      },
      inbound_source_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      interaction_type: {
        type: DataTypes.STRING,
      },
      interaction_category: {
        type: DataTypes.INTEGER,
      },
      interaction_sub_category: {
        type: DataTypes.INTEGER,
      },
      interaction_sub_sub_category: {
        type: DataTypes.INTEGER,
      },
      interaction_sub_sub_sub_category: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
      agent_answer: {
        type: DataTypes.TEXT,
      },
      interaction_status: {
        type: DataTypes.STRING,
      },
      request_by: {
        type: DataTypes.STRING,
      },
      branch: {
        type: DataTypes.STRING,
      },
      workstation_id: {
        type: DataTypes.STRING,
      },
      ip_address: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      extension: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email_address: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
      },
      attachment: {
        type: DataTypes.STRING,
      },
      sa_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      complaint_type: {
        type: DataTypes.STRING,
      },
      ticket_reference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.STRING,
      },
      created_time: {
        type: DataTypes.DATE,
      },
      flexible_field: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pir: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_pir: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "cc_interaction",
      sequelize,
      timestamps: false,
      engine: "MYISAM",
    }
  );

  return CcInteraction;
};
