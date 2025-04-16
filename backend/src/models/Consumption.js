import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import Event from "./Event.js";


const Consumptions = sequelize.define('Consumptions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    eventId: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: "id"
        }
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantityTotal: {
        type:DataTypes.INTEGER,
    },
    priceUnit: {
        type:DataTypes.INTEGER,
    },
},
{
    tableName: "consumptions", // 🔸 define o nome real da tabela no banco, se necessário
    timestamps: false, // 🔸 se você não estiver usando createdAt/updatedAt
})

Consumptions.belongsTo(Event, {
    foreignKey: "eventId"
})

export default Consumptions;