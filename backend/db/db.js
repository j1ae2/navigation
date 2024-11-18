import { Sequelize } from "sequelize";
export const sequelize= new Sequelize('container_db','postgres','tamales.com',{
    host: 'localhost',
    dialect: 'postgres'
});