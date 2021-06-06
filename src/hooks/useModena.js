import React, {useState} from 'react';

const useModena = () => {
    
    const [state, setState] = useState('');

    const Seleccionar = () => (
        <>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </>
    );

    return [state, Seleccionar, setState];
};

export default useModena;