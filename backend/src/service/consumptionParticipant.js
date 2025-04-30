import { ConsumptionParticipants, Participant } from "../models/index.js";



class ConsumptionParticipantService {
    async Create(data) {
        console.log("🔍 Dados recebidos no service:", data);

        return await ConsumptionParticipants.create(data);
    }

    //Buscar todos Consumações de Participantes 
    async FindAll() {

        return await ConsumptionParticipants.findAll();
    }
    async FindById(consumptionId) {
        console.log("🔍 ConsumptionId recebidos no service:", consumptionId);

        return await ConsumptionParticipants.findOne({where: {consumptionId}});
    }
    //Buscar por participante em uma Consumação especifica
    async FindByConsumptionId(consumptionId) {
        return await ConsumptionParticipants.findAll({
            where: { consumptionId },
            include: {
                model: Participant,    // Incluindo o modelo 'Participant'
                attributes: ['id', 'name']  // Selecionando as colunas 'id' e 'name' da tabela 'Participant'
            }
        });
    }
    
    
}

export default new ConsumptionParticipantService();
 