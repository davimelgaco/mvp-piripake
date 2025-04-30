import consumptionService from "../service/consumption.js";

class ConsumptionController {
   

    async FindAll(req, res) {
        const { eventId } = req.params;

        
        try {
            const consumption = await consumptionService.FindAll(eventId);
            console.log(eventId);
            if (!consumption) {
                return res.status(404).json({ message: "Consumo não encontrado para este evento" });
            }

            return res.status(200).json(consumption);
        } catch (error) {
            return res.status(500).json({ message: "Erro no servidor", error: error.message });
        }
    }
    async FindById(req, res) {
        const { eventId, consumptionId } = req.params;

        
        try {
            const consumption = await consumptionService.FindById(eventId, consumptionId);
            console.log(eventId);
            if (!consumption) {
                return res.status(404).json({ message: "Consumo não encontrado para este evento" });
            }

            return res.status(200).json(consumption);
        } catch (error) {
            return res.status(500).json({ message: "Erro no servidor", error: error.message });
        }
    }
    async Create(req, res) {
        const { eventId } = req.params;
        const data = req.body

        console.log('eventId:', eventId);
        console.log('data:', data);
        try {
            const newConsumption = await consumptionService.Create(eventId, data);
            res.status(201).json(newConsumption);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async CalculateConsumptionPerEvent (req, res) {
        const { eventId } = req.params;
    
        try {
            const result = await consumptionService.calculateEventConsumption(eventId);
            return res.status(200).json(result);
        } catch (error) {
            console.error("Erro ao calcular consumo por evento:", error);
            return res.status(500).json({ message: "Erro ao calcular consumo do evento." });
        }
    };
}

export default new ConsumptionController();
 