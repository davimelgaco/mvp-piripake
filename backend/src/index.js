import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js'; // Isso já importa tudo e define os relacionamentos

import database from './database.js';

import participantRouter from './routes/participantRoutes.js';
import eventRouter from './routes/eventRoutes.js';
import consumptionRouter from './routes/consumptionRoutes.js';
import consumptionParticipantRouter from './routes/consumptionParticipantRoutes.js';

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

const port = 3001

app.use('/api/v1/participant', participantRouter)
app.use('/api/v1/event', eventRouter)
app.use('/api/v1/events/', consumptionRouter);
app.use('/api/v1/events/consumption-participants', consumptionParticipantRouter);


database
    .sync({ force: false })
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