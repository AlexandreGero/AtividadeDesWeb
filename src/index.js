// Importar bibliotecas React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import PlayerDetail2 from './PlayerDetail2';

// Criar componente React

 

class App extends React.Component{
    VetorJogadores = [
        {
            nome:"Leonel Messi",
            nacionalidade:"Argentina",
            time:"Barcelona",
        },
        {
            nome:"Neymar",
            nacionalidade:"Brasil",
            time:"PSG",
        },
        {
            nome:"Ronaldinho foda-se",
            nacionalidade:"Paraguai",
            time:"Tabajara",
        }
    ]

    constructor(props){
        super(props);

        console.log(this);

        this.state = {
            indice: 0
        }
    }


    incrementarIndice = (event) => {
        if (this.state.indice<=this.VetorJogadores.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }

    render(){
        return (
            <div className="container">
                <PlayerDetail2 nome = "Contador de Baiano" VetorJogadores ={this.VetorJogadores[this.state.indice]}>

                </PlayerDetail2>
                <br/>
                <br/>
                <button style={{marginRight: '5px'}} type="button" class="btn btn-primary" onClick={this.decrementarIndice}>Anterior</button>
                <button type="button" class="btn btn-primary" onClick={this.incrementarIndice}>Proximo</button>
               
            </div>
        );
    }
}


// Mostrar componente React na tela
ReactDOM.render(<App />, document.querySelector("#root"));



