import { useState } from "react";
import { toast } from 'react-toastify';
import consumptionService from '../../services/consumptionService';

const ConsumptionForm = ({ eventId, onSuccess }) => {
  const [productName, setProductName] = useState('');
  const [quantityTotal, setQuantityTotal] = useState('');
  const [priceUnit, setPriceUnit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await consumptionService.create({ eventId, productName, quantityTotal, priceUnit });
      toast.success('Consumo adicionado!');
      setProductName('');
      setQuantityTotal('');
      setPriceUnit('');
      onSuccess(); // recarregar lista
    } catch (err) {
      toast.error('Erro ao adicionar consumo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold">Adicionar Consumo</h2>
      <input
        type="text"
        placeholder="Produto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
        className="input"
      />
      <input
        type="number"
        placeholder="Quantidade total"
        value={quantityTotal}
        onChange={(e) => setQuantityTotal(e.target.value)}
        required
        className="input"
      />
      <input
        type="number"
        placeholder="Preço unitário"
        value={priceUnit}
        onChange={(e) => setPriceUnit(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
};

export default ConsumptionForm;
