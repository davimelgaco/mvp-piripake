import modelConsumptionParticipants from "../models/ConsumptionParticipants.js";

class ConsumptionParticipantService {
    async Create(data) {
        console.log("🔍 Dados recebidos no service:", data);

        return await modelConsumptionParticipants.create(data);
    }

    async FindById(consumptionId) {
        console.log("🔍 ConsumptionId recebidos no service:", consumptionId);

        return await modelConsumptionParticipants.findOne({where: {consumptionId}});
    }
}

export default new ConsumptionParticipantService();
 