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
            type: DataTypes.STRING,
            unique:true
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true
    }

);

//PARA LA RELACIÓN DE USUARIOS Y PRODUCTOS
/*Usuario.hasMany(Producto, {
    foreignKey: "usuario_id",
    sourceKey: "id"
});

Producto.belongsTo(Usuario, {
    foreignKey: "usuario_id",
    targetKery: "id"
});*/