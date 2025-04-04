const serviceEvent = require("../service/event")

class EventController {
    async FindAll(req, res) {
        try {

            const events = await serviceEvent.FindAll()

            res.status(200).send({ events })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async FindById(req, res) {
        try {
            const { id } = req.params
            const event = await serviceEvent.FindById(id)

            res.status(200).send({ event })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Create(req, res) {
        try {
            const { name, status } = req.body
            const event = await serviceEvent.Create(name, status)
            res.status(200).send({ event })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Update(req, res){
        try {
            const { name, status } = req.body
            const { id } = req.params
            const event = await serviceEvent.Update(id, name, status)
            res.status(200).send({ event })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }
    async Delete(req, res) {
        try {
            const { id } = req.params
            const event = await serviceEvent.Delete(id)

            res.status(200).send({ msg: "Evento deletado com sucesso!" });
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new EventController(); 