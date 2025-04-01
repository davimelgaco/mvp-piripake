


// database.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

// Criação da instância do Sequelize
const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT || 'mysql', // Alterando para 'mysql'
});


// Exporte a instância do Sequelize
module.exports = sequelize;
