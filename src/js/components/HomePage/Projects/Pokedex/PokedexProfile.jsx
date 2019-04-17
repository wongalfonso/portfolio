import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stopAnimation } from './PokedexActions';
import { Redirect } from 'react-router';
import Img from 'react-image';
import pokeBall from '../../../../../../public/images/pokeball.png';
import pokeVid from './../../../../../../public/video/pokemonAnimation.mp4';

class PokedexProfile extends Component {    

  Animation() {
    const { dispatch } = this.props;
    setTimeout(() => {
      dispatch(stopAnimation());
    },2500);
    return (
      <div className='animation'>
        <video id='pokeVid' loop autoPlay muted >
          <source src={pokeVid} type='video/mp4' />
        </video>
        <Img src= {pokeBall} className='pokemon-ball' />
      </div>
    )
  }


  Card() {
    const { pokemon } = this.props;
    const url = pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : null;
    const abil = pokemon.abilities ? pokemon.abilities : [];
    if (pokemon.length < 1) {
      return <Redirect from='/pokedex/*' to='/pokedex' />
    } else {
      return (
        <div className="full-page">
          <div className='container pokemon-container'>
            <div className="poke-card">
              <div className="poke-header">
                <span className='poke-name'>{pokemon.name}</span>
                <span className='poke-number'>{pokemon.base_experience}</span>
              </div>
              <div className="poke-image">
                <div className="poke-image-container">
                  <Img src={url} />
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
                        <div key={i}>{tag}</div>
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
    } 
    else {
      return this.Card();
    }
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.home.pokedex.pokemon,
    animation: state.home.pokedex.animation
  }
}

export default connect(mapStateToProps)(PokedexProfile);
