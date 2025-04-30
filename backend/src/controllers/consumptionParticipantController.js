import consumptionParticipantService from "../service/consumptionParticipant.js";

class ConsumptionParticipantController {
    
    async FindAll(req, res) {

        try {
            const consumptionParticipant = await consumptionParticipantService.FindAll();
         
            if (!consumptionParticipant) {
                return res.status(404).json({ message: "Participante de consumo não encontrado para este evento" });
            }

            return res.status(200).json(consumptionParticipant);
        } catch (error) {
            return res.status(500).json({ message: "Erro no servidor", error: error.message });
        }
    }
    async FindById(req, res) {
        const { id } = req.params;

        try {
            const consumptionParticipant = await consumptionParticipantService.FindById(id);
            console.log(consumptionParticipant);
            
            if (!consumptionParticipant) {
                return res.status(404).json({ message: "Participante de consumo não encontrado para este evento" });
            }

            return res.status(200).json(consumptionParticipant);
        } catch (error) {
            return res.status(500).json({ message: "Erro no servidor", error: error.message });
        }
    }

    async Create(req, res) {
        try {
            const { consumptionId, participantId, unitsConsumed } = req.body;
            
            if (!consumptionId || !participantId || !unitsConsumed) {
                return res.status(400).json({ message: "Todos os dados são obrigatórios" });
            }

            const newConsumptionParticipant = await consumptionParticipantService.Create({ consumptionId, participantId, unitsConsumed });

            return res.status(201).json(newConsumptionParticipant);
        } catch (error) {
            return res.status(500).json({ message: "Erro no servidor", error: error.message });
        }
    }
}

export default new ConsumptionParticipantController();


