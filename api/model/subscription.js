import { Sequelize, DataTypes } from "sequelize";
import DB from "../config/db.js";
import userModel from "../model/user.js"
const SubscriptionPlan = DB.define(
  "SubscriptionPlan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    subscriptionPlan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subscriptionFeature: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active", 
    },
  },
  {
    timestamps: false,
    tableName: "SubscriptionPlan",
  }
);
SubscriptionPlan.belongsTo(userModel, {
  foreignKey: "subscriptionPlan",
  targetKey: "subscriptionPlan",
  constraints: false,
});
export default SubscriptionPlan;
