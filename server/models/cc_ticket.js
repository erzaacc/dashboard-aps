"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CcTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CcTicket.init(
    {
      ticket_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      interaction_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      group_section: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      pic_group_section: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      pic_pick_up_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      assign_group_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      group_section_status: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      backdesk: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      backdesk_pick_up_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      assign_backdesk_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      backdesk_status: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      priority: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      created_by: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      created_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      status_employee: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      source_system: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      tableName: "cc_ticket",
      sequelize,
      timestamps: false,
      engine: "MYISAM",
    }
  );
  return CcTicket;
};
