import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Cotizar = ({resultado}) => {

    if (Object.keys(resultado).length === 0) return null;

    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación en últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
};

export default Cotizar;