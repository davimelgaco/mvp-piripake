const serviceParticipant = require("../services/participant")



class ParticipantController {
    async FindAll(req, res) {
        try {

            res.status(200).send("Deu bom")
        } catch (e) {
            res.status(500).send("Deu ruim")
        }
    } 
    async Create(req, res) {
        try {
            const { name } = req.body
            const participant = await serviceParticipant.Create(name)
            res.status(200).send(`Deu bom ${participant}`)
        } catch (e) {
            res.status(500).send("Deu ruim")
        }
    } 
}

module.exports = new ParticipantController()