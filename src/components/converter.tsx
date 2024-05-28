import React, { useState } from 'react';

const BinaryToDecimal: React.FC = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState<number | null>(null);

  const handleConvert = () => {
    try {
      const decimalValue = parseInt(binaryInput, 2);
      setDecimalOutput(decimalValue);
    } catch (error) {
      console.error('Erro ao converter o número binário:', error);
    }
  };

  return (
    <div id='main'>
      <input
        id='box_write'
        type="text"
        placeholder="Insira um número binário"
        value={binaryInput}
        onChange={(e) => setBinaryInput(e.target.value)}
      />
      <button id='butaum' onClick={handleConvert}>Converter</button>
      {decimalOutput !== null && <p id='result'>Valor decimal: {decimalOutput}</p>}
    </div>
  );
};

export default BinaryToDecimal;