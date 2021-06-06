import React from 'react';
import styled from '@emotion/styled';
import useModena from '../hooks/useModena';

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

const Form = () => {

    const [moneda, SelectMoneda, setState] = useModena();

    return (
        <form>

            <SelectMoneda />

            <Button type="submit">Calcular</Button>
        </form>
    );
};

export default Form;