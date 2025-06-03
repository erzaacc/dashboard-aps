'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const CcTicketUnitResponse = sequelize.define(
    "CcTicketUnitResponse",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      ticket_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_group: {
        type: DataTypes.STRING,
      },
      response_by: {
        type: DataTypes.STRING,
      },
      pickup_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      response_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      response_status: {
        type: DataTypes.STRING,
      },
      response_description: {
        type: DataTypes.TEXT,
      },
      currative_solution: {
        type: DataTypes.TEXT,
      },
      preventive_solution: {
        type: DataTypes.TEXT,
      },
      attachment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ip_address: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "cc_ticket_unit_response",
      sequelize,
      timestamps: false,
      engine: "MYISAM",
    }
  );

  return CcTicketUnitResponse;
};