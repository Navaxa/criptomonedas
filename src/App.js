import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import imagen from './cryptomonedas.png';
import axios from 'axios';
import Cotizar from './components/Cotizar';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;


const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [wait, setWait] = useState(false);

  useEffect(() => {

    const cotizarCriptomoneda = async () => {
      if (moneda === '' || criptomoneda === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      setWait(true);

      setTimeout(() => {

        setWait(false);

        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

      }, 3000);

    }

    cotizarCriptomoneda();

  }, [moneda, criptomoneda]);

  const component = (wait) ? <Spinner /> : <Cotizar resultado={resultado} />;

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="Imagen crypto"
        />
      </div>
      <div>
        <Heading>Cotiza critomonedas al instante</Heading>
        <Form
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
        />
        {component}
      </div>
    </Contenedor>
  );
}

export default App;
