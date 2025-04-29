import consumptionService from "../service/consumption.js";

class ConsumptionController {
   

    async FindById(req, res) {
        const { eventId } = req.params;

        
        try {
            const consumption = await consumptionService.FindById(eventId);
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
}

export default new ConsumptionController();
 