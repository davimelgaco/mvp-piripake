import React, { useEffect, useState } from 'react';
import { getCalculation } from '../../services/calculateService';

const EventConsumptionSummary = ({ eventId }) => {
  const [summary, setSummary] = useState(null);

  const handleCalculate = async () => {
    const result = await getCalculation(eventId);
    setSummary(result);
  };

  return (
    <div>
      <button onClick={handleCalculate} className="btn btn-outline mb-4">
        Calcular Consumo Total
      </button>

      {summary && (
        <div className="space-y-4">
          {summary.map((p) => (
            <div key={p.participantId} className="border p-2 rounded">
              <h3 className="font-bold">{p.name}</h3>
              <p>Total: R${p.total.toFixed(2)}</p>
              <ul className="list-disc ml-5 text-sm">
                {p.details.map((d, i) => (
                  <li key={i}>
                    {d.productName} – {d.unitsConsumed} x R${d.priceUnit} = R${d.total.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventConsumptionSummary;
