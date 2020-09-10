import React from 'react'
import './resultado.css'

class ResultadoArt extends React.Component {

    render() {
        const resultado = this.props.resultado

        return (
            <div className='resultado' key={resultado.id}>
                {this.props.resultado.map(art => {
                    console.log(art.image[1])
                    return (
                        <div key={art.url} className='artista'>
                            <a href={art.url} target='blank'>
                                <img src={art.image[2]["#text"] ? art.image[1]["#text"] : "https://via.placeholder.com/64"} alt='imagem'></img>
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

export default ResultadoArt
