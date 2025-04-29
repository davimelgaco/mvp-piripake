import modelConsumptions from "../models/Consumption.js";

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
    async FindById(eventId) {
        return await modelConsumptions.findOne({ where: { eventId } });


    }
}

export default new ServiceConsumption();