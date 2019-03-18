import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokedexForm from './PokedexForm';
import PokedexResults from './PokedexResults';
import Pagination from './Pagination';
import { searchPokemon, updateInput, searchAllPokemon, changePage, showAll } from './PokedexActions';
import Pikachu from '../../../../../../public/images/Pikachu.png';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchAll = this.searchAll.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
  }
  componentDidMount() {
    const { dispatch} = this.props;
    dispatch(searchAllPokemon());
  }
  handleInput(e) {    
    const value = e.target.value;
    const { dispatch } = this.props;
    dispatch(updateInput(value));
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  searchAll(e) {
    e.preventDefault();
    const { dispatch} = this.props;
    dispatch(showAll());
  }
  searchPokemon(url) {
    const { dispatch } = this.props;
    dispatch(searchPokemon(url));
  }
  updatePage(number) {    
    const { dispatch, currentPage, searchLength } = this.props;        
    if (number == '>') {
      dispatch(changePage(currentPage + 1))
    } else if (number == '<') {
      dispatch(changePage(currentPage - 1))
    } else if (number == searchLength.length - 1) {
      dispatch(changePage(number));
    } else {
      dispatch(changePage(number - 1));
    }
  }
  render() {
    const { currentPage, search } = this.props;
    const page = search[currentPage]; 
    return (
      <div className="container home-container">
        <div className="home">
          <div className="home-header">
            Welcome to the Online Pokemon Database
          </div>          
          <div className="home-form">
            <div className="home-form-image">
              <img src = { Pikachu }/>
            </div>
            <PokedexForm
              input = {this.handleInput}
              submit = {this.handleSubmit}
              all = {this.searchAll }
            />            
          </div>
          <Pagination
            updatePage = { this.updatePage }
          />
          <PokedexResults
            searchPoke = { this.searchPokemon }
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    input: state.home.pokedex.input,
    currentPage: state.home.pokedex.currentPage,
    searchLength: state.home.pokedex.searchLength, 
    search: state.home.pokedex.search  
  }
}

export default connect(mapStateToProps)(Pokedex);