import Sequelize from "sequelize";
import  DB  from "../config/db.js";
const Users = DB.define(
  "Users",
  {
    id: {
      field: "id",
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      field: "name",
      type: Sequelize.DataTypes.STRING,
    },
    email: {
      field: "email",
      type: Sequelize.DataTypes.STRING,
      defaultValue: false 
    },
    password: {
        field: "password",
        type: Sequelize.DataTypes.STRING,
      },
      subscriptionPlan:{
        field: "subscriptionPlan",
        type: Sequelize.DataTypes.STRING,
      }
  },
  {
    timestamps: false,
    tableName: "Users"
  }
);

export default Users;
