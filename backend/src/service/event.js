import modelEvent from '../models/Event.js';

class ServiceEvent {

    async FindAll() {
        return modelEvent.findAll({ where: {} });
    }

    async FindById(id) {
        return modelEvent.findOne({ where: { id } });
    }

    async Create(name, status) {
        if (!name) {
            throw new Error("Favor informar o nome do Bar");
        } else if (!status) {
            throw new Error("Favor informar o status do evento");
        }
        return modelEvent.create({ name, status });
    }

    async Update(id, name, status) {
        const oldEvent = await this.FindById(id);

        if (!oldEvent) {
            throw new Error("Bar não encontrado!");
        }

        oldEvent.name = name || oldEvent.name;
        oldEvent.status = status || oldEvent.status;

        await oldEvent.save();

        return oldEvent;
    }

    async Delete(id) {
        const oldEvent = await this.FindById(id);

        if (!oldEvent) {
            throw new Error("Bar não encontrado!");
        }

        await oldEvent.destroy();
        return { message: "Evento deletado com sucesso!" };
    }
}

export default new ServiceEvent();
