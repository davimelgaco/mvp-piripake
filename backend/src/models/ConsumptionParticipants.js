import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import Consumptions from "./Consumption.js";
import Participant from "./Participants.js";


const ConsumptionParticipants = sequelize.define('ConsumptionParticipants', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    consumptionsId: {
        type: DataTypes.INTEGER,
        references: {
            model: Consumptions,
            key: "id"
        },
    },
    participantId: {
        type: DataTypes.INTEGER,
        references: {
            model: Participant,
            key: "id"
        },
    },
    unitsConsumed:{
        type: DataTypes.INTEGER
    }
},
{
    tableName: "consumptionParticipants", // 🔸 define o nome real da tabela no banco, se necessário
    timestamps: false, // 🔸 se você não estiver usando createdAt/updatedAt
})

export default ConsumptionParticipants;