import React, { Component } from 'react'
import './search.css'
import { Link } from 'react-router-dom';

class SearchAlb extends Component {

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
        <form onSubmit={this.onFormSubmit}>
          <div className='search-input'>
            <input type="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })} placeholder='Digite o nome do album' required></input>
          </div>
          <div className='search-button'>
            <button type='submit' value='pesquisar'>PESQUISAR</button>
            <button onClick={refreshPage}>LIMPAR</button>
          </div>
        </form>
        
        <Link className='search-leftt' to='/'>Buscar por artista</Link>
      </div>
    )
  }
}

export default SearchAlb