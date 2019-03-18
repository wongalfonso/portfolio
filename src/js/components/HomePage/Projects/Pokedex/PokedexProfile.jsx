import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stopAnimation } from './PokedexActions';
import { Redirect } from 'react-router';
import Img from 'react-image';
import pokeBall from '../../../../../../public/images/pokeBall.png';
import backgroundVid from '../../../../../../public/video/pokemonAnimation.mp4';

let something = {back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", back_female: null, back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png", back_shiny_female: null, front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
}

class PokedexProfile extends Component {
  Animation() {
    const { dispatch } = this.props;
    setTimeout(() => {
      dispatch(stopAnimation());
    },2000);
    return (
      <div className = 'animation'>
        <video id='pokeVid' loop autoPlay muted >
          <source src={backgroundVid} type='video/mp4' />
        </video>  
          <img src = { pokeBall } className = 'pokemon-ball' />       
      </div>
    )
  }


  Card() {
    const { pokemon } = this.props;    
    const url = pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : null;  
    const abil = pokemon.abilities ? pokemon.abilities : [];
    if (pokemon.length < 1) {
      return <Redirect from = '/pokedex/:name' to = '/pokedex'/>
    } else {
      return (
        <div className="full-page">
          <div className = 'container pokemon-container'>  
            <div className="poke-card">
              <div className="poke-header">    
                <span className = 'poke-name'>{pokemon.name}</span>
                <span className = 'poke-number'>{pokemon.base_experience}</span>
              </div>
              <div className="poke-image">
                <div className="poke-image-container">
                  <Img src = {url}/>
                </div>
              </div>
              <div className="poke-info">
                <div className="poke-info-header">
                  <span><i>Height: {pokemon.height} Weight: {pokemon.weight}</i>
                  </span>
                </div>
                <div className="poke-info-body">
                  <div className="poke-info-body-header">
                    Pokémon Abilities
                  </div>
                  <div className="poke-info-body-info">
                    {abil.map((name, i) => {
                      const tag = name.ability && name.ability.name ? name.ability.name : null;                
                      return (
                        <div key = {i}>{tag}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>      
          </div>
        </div>
      )
    }
  }
  render() {
    const { animation } = this.props;     
    
    if (animation) {
      return this.Animation();
    } else {
      return this.Card();
    }    
  }
}

function mapStateToProps(store) {   
  return {    
    pokemon: store.homeForm.pokemon,
    animation: store.homeForm.animation
  }
}

export default connect(mapStateToProps)(PokedexProfile);
