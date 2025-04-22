
# 🖥️ Frontend - Piripake do Chavs

Frontend da aplicação Piripake do Chavs, criado com **React**. A interface permite registrar os eventos mensais, adicionar consumos e participantes, e visualizar a divisão da conta.

---

## 🛠️ Tecnologias utilizadas

- React
- React Router DOM
- Axios (requisições à API)
- CSS Modules / Tailwind (opcional)
- Vite (recomendado) ou Create React App

---

## 📁 Estrutura

```
frontend/
├── src/
│   ├── pages/              # Páginas como Home, EventForm, EventDetails
│   ├── components/         # Componentes reutilizáveis
│   ├── services/           # Axios configs
│   └── App.jsx             # Roteamento e estrutura
```

---

## 📱 Funcionalidades

- 🆕 Criar novo evento
- 🍻 Adicionar consumos por produto (cervejas, porções, etc)
- 👥 Associar participantes aos produtos consumidos
- 🧾 Visualizar cálculo detalhado por pessoa
- 💡 (Planejado) Suporte para participantes visitantes

---

## 🔗 Integração com Backend

A comunicação com a API é feita via Axios com base na URL definida em `services/api.js`.

```js
// Exemplo
axios.post("/events/1/consumption", {
  productName: "Cerveja Brahma",
  quantityTotal: 10,
  priceUnit: 9.00,
  participantes: [
    { id: 1, quantidade: 8 },
    { id: 2, quantidade: 10 },
    ...
  ]
})
```

---

## ▶️ Rodando localmente

```bash
npm install
npm run dev
```

> Certifique-se de que o backend está rodando em `http://localhost:3001` (ou outro configurado)

---

## ✨ Melhorias planejadas

- Login (com token)
- Histórico dos eventos
- Exportar relatórios PDF
