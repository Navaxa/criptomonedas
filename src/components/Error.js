import React from 'react';
import styled from '@emotion/styled';

const MessageError = styled.p`
    background-color: #B7322C;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({mensaje}) => {
    return (
        <MessageError>
            {mensaje}
        </MessageError>
    );
};

export default Error;