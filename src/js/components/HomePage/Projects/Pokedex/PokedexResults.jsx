import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PokedexResults extends Component {  
  renderTable(page){        
    return (
      <div className = 'results'>      
      <table className = 'results-table results-table--active'>
        <thead>
        <tr>
            <th> Pokemons </th>            
        </tr>
        </thead>
        <tbody>          
          {page.map((poke, i) => {
            return (
              <tr key = {i}>
                <td onClick = {() => this.props.searchPoke(poke.name)}> 
                  <Link to = { `pokedex/${poke.name}` }>{poke.name}</Link>
                </td>
              </tr>
          )
          })
          }
        </tbody>
      </table>
    </div>
    )
  }

  renderEmpty(){
    return (
      <div className = 'results'>
        <table className = 'results-table'></table>
      </div> 
    )
  }

    render() {
      const { search, currentPage, showResults } = this.props;  
      return (
        (showResults == true) ? this.renderTable(search[currentPage]) : this.renderEmpty()
      )
    }
}


function mapStateToProps(state) {
  return {
    search: state.home.pokedex.search,
    currentPage: state.home.pokedex.currentPage,
    showResults: state.home.pokedex.showResults,
  }
}

export default connect(mapStateToProps)(PokedexResults)