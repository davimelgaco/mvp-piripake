const serviceParticipant = require("../service/participant")



class ParticipantController {
    async FindAll(req, res) {
        try {
            const participants =  await serviceParticipant.FindAll()

            res.status(200).send({ participants })
        } catch (e) {
            res.status(500).send({ msg: e.message})
        }
    } 
    async FindById(req, res) {
            try {
                const { id } = req.params
                const participant = await serviceParticipant.FindById(id)
    
                res.status(200).send({ participant })
            } catch (error) {
                res.status(500).send({ msg: error.message })
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
    async Update(req, res){
            try {
                const { name } = req.body
                const { id } = req.params
                const participant = await serviceParticipant.Update(id, name)
                res.status(200).send({ participant })
            } catch (e) {
                res.status(500).send({ msg: e.message })
            }
        }
        async Delete(req, res) {
            try {
                const { id } = req.params
                const participant = await serviceParticipant.Delete(id)
    
                res.status(200).send({ participant })
            } catch (error) {
                res.status(500).send({ msg: error.message })
            }
        }
}

module.exports = new ParticipantController()