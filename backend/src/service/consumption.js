import modelConsumptions from "../models/Consumption.js";
import consumptionParticipantService from "./consumptionParticipant.js";



class ServiceConsumption {
    async Create(eventId, data) {
        try {
            //Validação do eventId
            if (!eventId) {
                throw new Error("Favor informar o ID do evento");
            }
            // Validação dos campos dentro de "data"
            else if (!data.productName) {
                throw new Error("Favor informar o nome do produto");
            } else if (!data.quantityTotal) {
                throw new Error("Favor informar a quantidade total");
            } else if (!data.priceUnit) {
                throw new Error("Favor informar o preço unitário");
            }

            // Se tudo estiver correto, cria o consumo
            // Junta os dados recebidos (productName, quantityTotal, priceUnit) com o eventId vindo dos params
            // Isso garante que todos os campos necessários serão enviados juntos para o Sequelize criar o registro corretamente
            return await modelConsumptions.create({
                ...data,       // Dados do body: productName, quantityTotal, priceUnit
                eventId        // ID do evento vindo dos params, adicionado manualmente
            });

        } catch (error) {
            // Tratamento de erros - envia a mensagem do erro
            throw new Error(error.message);


        }
    }
    async FindAll(eventId) {
        return await modelConsumptions.findAll({ where: { eventId } });


    }
    async FindById(id) {
        return await modelConsumptions.findOne({ where: { id } });


    }
    async calculateEventConsumption(eventId) {
        // lógica de cálculo detalhado aqui
        // 1. Buscar todas as consumptions do evento
        const consumptionAllEvent = await this.FindAll(eventId)

        // Inicializa o objeto de resultado final
        const resultByParticipant = {};

        // 2. Para cada consumption:
        // a. Buscar os participantes
        for (const consumption of consumptionAllEvent) {
            const participants = await consumptionParticipantService.FindByConsumptionId(consumption.id);
            console.log(`🔎 Participantes da consumption ${consumption.id}:`, participants);


            // b. Somar quantidade total informada pelos participantes
            const totalUnitsConsumed = participants.reduce((sum, p) => sum + p.unitsConsumed, 0);

            // c. Se exceder o quantityTotal, normalizar
            const normalizationFactor = totalUnitsConsumed > consumption.quantityTotal
                ? consumption.quantityTotal / totalUnitsConsumed
                : 1;

            // d. Calcular valor individual proporcional
            const totalValue = consumption.quantityTotal * consumption.priceUnit;

            // e. Somar para cada participante
            for (const participant of participants) {
                const adjustedUnits = participant.unitsConsumed * normalizationFactor;
                const amountToPay = (adjustedUnits / consumption.quantityTotal) * totalValue;

                // Verifica se o participante já existe no resultado final, se não, inicializa
                if (!resultByParticipant[participant.participantId]) {
                    resultByParticipant[participant.participantId] = {
                        participantName: participant.Participant.name, // Incluindo o nome do participante
                        totalAmount: 0,
                        details: []
                    };
                }

                // Soma o valor a ser pago pelo participante
                resultByParticipant[participant.participantId].totalAmount += amountToPay;

                // Adiciona o detalhamento da consumação do participante
                resultByParticipant[participant.participantId].details.push({
                    consumptionId: consumption.id,
                    product: consumption.productName,
                    units: adjustedUnits,
                    amount: amountToPay
                });
            }
        }
        // 3. Retornar objeto final: { participantId: { nome, valorTotal, detalhamento } }

        return resultByParticipant
    }

}

export default new ServiceConsumption();

