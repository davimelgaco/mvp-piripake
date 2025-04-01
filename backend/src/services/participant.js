const modelParticipant = require("../models/participants");

class ServiceParticipant {
   async FindAll(){
    return modelParticipant.FindAll({where: { }})
   }
   async Create(name){
    return modelParticipant.Create({ id, name })
   }
}

module.exports = new ServiceParticipant()