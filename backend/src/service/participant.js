import modelParticipant from "../models/participants.js";

class ServiceParticipant {
   async FindAll() {
      return modelParticipant.findAll({ where: {} });
   }

   async FindById(id) {
      return modelParticipant.findOne({ where: { id } });
   }

   async Create(name) {
      if (!name) {
         throw new Error("Favor informar o nome do Membro");
      }
      return modelParticipant.create({ name });
   }

   async Update(id, name) {
      const oldParticipant = await this.FindById(id);

      if (!oldParticipant) {
         throw new Error("Membro não encontrado!");
      }

      oldParticipant.name = name || oldParticipant.name;

      await oldParticipant.save();

      return oldParticipant;
   }

   async Delete(id) {
      const oldParticipant = await this.FindById(id);

      if (!oldParticipant) {
         throw new Error("Membro não encontrado!");
      }

      await oldParticipant.destroy();
   }
}

export default new ServiceParticipant();
