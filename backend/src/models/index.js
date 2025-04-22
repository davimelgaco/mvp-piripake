import sequelize from "../database.js";

import Event from "./Event.js";
import Participant from "./Participants.js";
import Consumption from "./Consumption.js";
import ConsumptionParticipants from "./ConsumptionParticipants.js";

// RELACIONAMENTOS

// Event 1:N Consumption
Event.hasMany(Consumption, { foreignKey: "eventId" });
Consumption.belongsTo(Event, { foreignKey: "eventId" });

// Consumption 1:N ConsumptionParticipants
Consumption.hasMany(ConsumptionParticipants, { foreignKey: "consumptionsId" });
ConsumptionParticipants.belongsTo(Consumption, { foreignKey: "consumptionsId" });

// Participant 1:N ConsumptionParticipants
Participant.hasMany(ConsumptionParticipants, { foreignKey: "participantId" });
ConsumptionParticipants.belongsTo(Participant, { foreignKey: "participantId" });

export {
  sequelize,
  Event,
  Participant,
  Consumption,
  ConsumptionParticipants,
};
