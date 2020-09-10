import React from 'react'
import './resultado.css'

class ResultadoAlb extends React.Component {

    render() {
        const resultado = this.props.resultado
        return (
            <div className='resultado'>
                {this.props.resultado.map(art => {
                    return (
                        <div key={art.url} className='artista'>
                            <a href={art.url} target='blank'>
                                <img src={ art.image[2]["#text"] ? art.image[1]["#text"] : "https://via.placeholder.com/64"} alt='imagem'></img>
                            </a>
                            <a href={art.url} target='blank'>
                                <div className='info'><h2>{art.name}</h2></div>
                            </a>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ResultadoAlb
