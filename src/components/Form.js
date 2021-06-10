import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useModena from '../hooks/useModena';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';

const Button = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({setMoneda, setCriptomoneda}) => {

    const [criptoList, setCriptoList] = useState([]);
    const [error, setError] = useState(false); 


    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de estados unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Lobra exterlina' },
    ];

    const [moneda, SelectMoneda] = useModena('Selecciona tu moneda', '', MONEDAS);
    const [cripto, SelectCriptoMoneda] = useCriptomoneda('Selecciona tu criptomoneda', '', criptoList);

    useEffect(() => {
        const queryAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            setCriptoList(resultado.data.Data);

        }

        queryAPI();
    }, []);

    const contizarMoneda = (e) => {
        e.preventDefault();

        if (moneda === '' || cripto === '') {
            setError(true);
            return
        }

        setError(false);
        setMoneda(moneda);
        setCriptomoneda(cripto);

    }

    return (
        <form
            onSubmit={contizarMoneda}
        >
            {error ? <Error mensaje='Los campos son obligatorios' /> : null}

            <SelectMoneda />

            <SelectCriptoMoneda />

            <Button type="submit">Calcular</Button>
        </form>
    );
};

export default Form;