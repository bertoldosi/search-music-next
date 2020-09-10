import React from 'react'
import './main.css'
import api from '../services/api'
import SearchAlb from '../components/search/searchAlb'
import ResultadoAlb from '../components/resultado/resultadoAlb' 

class MainAlb extends React.Component {

    state = { lista: [] }

    onSearchSubmit = async text => {
        const response = await api.get('/?method=album.search', {
            params: {
                album: text, //parametro para buscar
                format: "json", // formato da lista vindo da api
            }
        });

        // add resultado dentro do estado lista
        this.setState({
            lista: response.data.results.albummatches.album
        });

    }

    render() {
        return (
            <div className='Main'>
                <SearchAlb onSubmit={this.onSearchSubmit} />
                <ResultadoAlb resultado={this.state.lista} />
            </div>
        )
    }
}

export default MainAlb