

class EventController {
    async FindAll(req, res) {
        try {
            res.status(200).send("Deu bom")
        } catch (e) {
            res.status(500).send("Deu ruim")
        }
    } 
}