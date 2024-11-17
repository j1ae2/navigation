import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        },
        passwordHash: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }

);