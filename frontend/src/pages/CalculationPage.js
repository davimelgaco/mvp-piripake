import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCalculation } from "../services/calculateService";

const CalculationPage = () => {
  const { id } = useParams(); // pega o ID do evento da URL
  const [calculation, setCalculation] = useState(null); // guarda os dados da API
  const [loading, setLoading] = useState(true); // controla o carregamento

  useEffect(() => {
    const fetchCalculation = async () => {
      try {
        const data = await getCalculation(id); // faz a requisição para API
        setCalculation(data); // armazena a resposta no estado
      } catch (error) {
        console.error("Erro ao buscar Cálculo", error); // loga qualquer erro
      } finally {
        setLoading(false); // marca o carregamento como concluído
      }
    };

    fetchCalculation();
  }, [id]); // dispara o useEffect quando o id mudar

  // Enquanto carrega
  if (loading) return <p>Carregando cálculo...</p>;

  // Se não houver dados
  if (!calculation) return <p>Nenhum cálculo encontrado.</p>;

  return (
    <div>
      <h2>Divisão Detalhada</h2>
      <ul>
        {/* Object.entries transforma o objeto em um array de [chave, valor] */}
        {Object.entries(calculation).map(([participantId, participantData]) => (
          <li key={participantId}>
            <strong>{participantData.participantName}</strong>: R${" "}
            {participantData.totalAmount.toFixed(2)}
            <ul>
              {/* Detalhes do consumo por produto */}
              {participantData.details.map((detail, i) => (
                <li key={i}>
                  {detail.product} – {detail.units} x R${" "}
                  {(detail.amount / detail.units).toFixed(2)} = R${" "}
                  {detail.amount.toFixed(2)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculationPage;
