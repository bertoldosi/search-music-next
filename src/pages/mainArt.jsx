import React from 'react'
import './main.css'
import api from '../services/api'
import SearchArt from '../components/search/searchArt'
import ResultadoArt from '../components/resultado/resultadoArt' 

class MainArt extends React.Component {

    state = { lista: [] }

    onSearchSubmit = async text => {
        const response = await api.get('/?method=artist.search', {
            params: {
                artist: text, //parametro para buscar
                format: "json", // formato da lista vindo da api
            }
        });

        // add resultado dentro do estado lista
        this.setState({
            lista: response.data.results.artistmatches.artist
        });

    }

    render() {
        return (
            <div className='Main'>
                <SearchArt onSubmit={this.onSearchSubmit} />
                <ResultadoArt resultado={this.state.lista} />
            </div>
        )
    }
}

export default MainArt