import React from 'react'

class PlayerDetail2 extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.VetorJogadores.nome}</h1>
                <h2>{this.props.VetorJogadores.nacionalidade}</h2>
                <h3>{this.props.VetorJogadores.time}</h3>
            </div>
        )
    }
}

export default PlayerDetail2