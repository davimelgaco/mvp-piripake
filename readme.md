
# 🍻 Piripake do Chavs - Projeto Completo

Aplicação criada para facilitar a **divisão da conta de bares** de um grupo fixo de amigos que se reúne mensalmente.

---

## 🔍 Problema

Dividir contas de forma justa é sempre complicado: cada um consome quantidades diferentes de produtos (cervejas, porções etc). O cálculo manual é demorado e sujeito a erros.

---

## 🎯 Objetivo

Automatizar o processo de:
1. Registrar participantes fixos e visitantes
2. Adicionar consumos no final do evento (baseado na conta)
3. Associar produtos aos participantes
4. Calcular quanto cada um deve pagar, com ou sem taxa de serviço

---

## ⚙️ Tecnologias usadas

### 🧠 Backend
- Node.js
- Express
- Sequelize (ORM)
- SQLite

### 🖥️ Frontend
- React
- React Router DOM
- Axios

---

## 🔗 Comunicação entre front e back

API REST com endpoints bem definidos para criação de eventos, consumos e participantes, bem como obtenção do resultado da divisão.

---

## 📐 Fluxo de uso

1. Criar evento
2. Informar os produtos consumidos (quantidade e valor)
3. Informar quais participantes consumiram e quanto
4. Aplicar (ou não) taxa de serviço
5. Ver o cálculo detalhado da conta por participante

---

## 📁 Estrutura do projeto

```
ProjetoPiripake/
├── backend/
│   └── ... (models, controllers, etc)
├── frontend/
│   └── ... (pages, components, etc)
└── README_PROJETO.md
```

---

## 💡 MVP concluído

- ✅ Participantes fixos
- ✅ Registro de eventos
- ✅ Registro de consumos
- ✅ Cálculo de valores
- ✅ Divisão justa da conta

---

## 📌 Próximos passos

- Suporte a visitantes (participantes não fixos)
- Dashboard com histórico
- Exportar como PDF
- Melhorias de UX/UI

---

## 🙌 Créditos

Desenvolvido por Davi Nelgaço em colaboração com Marcos Vinicius, inspirado na necessidade real de facilitar a divisão de contas entre amigos 🍻
