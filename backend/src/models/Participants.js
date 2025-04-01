const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importa a conexão com o banco

const Participant = sequelize.define('Participant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'participants', // Define o nome da tabela no banco
    timestamps: false // Remove createdAt e updatedAt (caso não precise)
});

module.exports = Participant;
