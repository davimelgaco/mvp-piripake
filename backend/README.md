
# 🛠️ Backend - Piripake do Chavs

Este é o backend do projeto **Piripake do Chavs**, responsável por gerenciar os dados de eventos, participantes, consumos e o cálculo da divisão da conta em bares.

---

## 📦 Tecnologias utilizadas

- Node.js
- Express
- Sequelize (ORM)
- SQLite (pode ser trocado por outro)
- Nodemon (desenvolvimento)
- PM2 (produção)

---

## 📁 Estrutura de Pastas

```
backend/
├── controllers/        # Lida com as regras de negócio e respostas HTTP
├── models/             # Define os modelos Sequelize
├── routes/             # Define as rotas da API
├── services/           # Lógica de cálculo de consumo
├── config/             # Configurações do banco
├── database.js         # Instância do Sequelize
└── server.js           # Inicialização do app
```

---

## 🔗 Endpoints principais

| Método | Rota                     | Descrição                                  |
|--------|--------------------------|--------------------------------------------|
| GET    | /events                  | Lista todos os eventos                     |
| POST   | /events                  | Cria um novo evento                        |
| GET    | /events/:id              | Consulta detalhes de um evento             |
| POST   | /events/:id/consumption  | Adiciona consumo a um evento               |
| GET    | /events/:id/result       | Calcula e retorna o resultado da conta     |

---

## 🧩 Models principais

### Event
- id
- name
- date

### Participant
- id
- name
- isFixed (booleano)

### Consumption
- id
- eventId
- productName
- quantityTotal
- priceUnit

### ConsumptionParticipant (intermediário)
- id
- consumptionId
- participantId
- quantityConsumed

---

## 🧮 Lógica de Cálculo

A lógica percorre os consumos e distribui proporcionalmente os valores de cada item com base na quantidade consumida por participante. Há suporte para divisão parcial, total ou individual, e aplicação opcional da taxa de serviço (10%).

---

## ▶️ Iniciando o servidor

```bash
npm install
npm run dev       # com nodemon
```

> Banco de dados será criado automaticamente com `sequelize.sync({ alter: true })`

---

## 📌 Observações

- A criação de participantes fixos é feita uma vez.
- Visitantes podem ser adicionados sob demanda.
- O horário de chegada **não é considerado**, apenas a quantidade consumida.
