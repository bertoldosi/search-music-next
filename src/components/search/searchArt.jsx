import React from 'react'
import './search.css'
import { Link } from 'react-router-dom';

class SearchArt extends React.Component {

  setData() {
    const date_now = new Date().getTime();
    let historico = this.state.text
    localStorage.setItem(date_now.toString(), historico);
  }

  state = {
    text: ''
  }
  
  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
    this.setData()
  }

  render() {

    function refreshPage() {
      window.location.reload(false);
    }

    return (
      <div className='search'>
        <h1 className='title'>Pesquisando por artistas</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className='search-input'>
            <input type="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })} placeholder='Digite o nome do artista' required></input>
          </div>
          <div className='search-button'>
            <button type='submit' value='pesquisar'>PESQUISAR</button>
            <button type='reset' onClick={refreshPage}>LIMPAR</button>
          </div>
        </form>
        <Link className='search-rightt' to='/mainAlb'>Buscar por album</Link>
      </div>
    )
  }
}

export default SearchArt