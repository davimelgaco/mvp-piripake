require('dotenv').config();

const express = require('express');
const database = require('./database');
const cors = require('cors');
const participantRouter = require('./routes/participantRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const port = 3001

app.use('/api/v1/participant', participantRouter)


database.db
    .sync({ force: true })
    .then((_) => {
        app.listen(port, () => {
            console.info(`'✅ Conectado ao MySQL com Sequelize!'${port}`);

        })
        
    })
    .catch((e) => {
        console.error(`Não foi possivel conectar com o banco ${e}`);
    })

app.get('/', (req, res) => {
    res.send('Piripake do Chavs API funcionando!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});