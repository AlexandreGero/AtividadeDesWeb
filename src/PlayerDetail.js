// Importar bibliotecas React e ReactDOM
import React from 'react';

// Criar componente
const PlayerDetail  = (props) => {
    return (
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.clube}</h2>
            <h3>{props.pais}</h3>

        </div>
    );
}

// Exportar componente
export default PlayerDetail;


