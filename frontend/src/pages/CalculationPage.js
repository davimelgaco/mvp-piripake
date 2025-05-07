import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCalculation } from "../services/calculateService";


const CalculationPage = () => {
    const { id } = useParams();
    const [calculation, setCalculation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCalculation = async () => {
            try {
                const data = await getCalculation(id);
                setCalculation(data)
            } catch (error) {
                console.error('Erro ao buscar Cálculo', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCalculation();
    }, [id]);

    
  if (loading) return <p>Carregando cálculo...</p>;
  if (!calculation) return <p>Nenhum cálculo encontrado.</p>;

  return (
    <div>
      <h2>Resumo do Evento</h2>
      <ul>
        {calculation.participants.map((p) => (
          <li key={p._id}>
            {p.name}: R$ {p.individualShare.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculationPage;
