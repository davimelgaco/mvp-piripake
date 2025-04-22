import { DataTypes } from 'sequelize';
import sequelize from '../database.js'; // Importa a conexão com o banco

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
  tableName: 'participants',
  timestamps: false
});



export default Participant;
