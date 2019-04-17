import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokeBall from '../../../../../../public/images/pokeBall.png';
import backgroundVid from '../../../../../../public/video/pokemonAnimation.mp4';
import { Redirect } from 'react-router-dom';


class Animation extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    this.timeout = setTimeout(() => {
      <Redirect from ='pokedex/animation' to = {'pokedex/' + poke.name}/>
    }, 1000);
  }
  render() {
    return (
      <div className = 'animation'>
        <video id='pokeVid' loop autoPlay muted >
          <source src={backgroundVid} type='video/mp4' />
        </video>  
          <img src = { pokeBall } className = 'pokemon-ball' />       
      </div>
    )
  }
}

function mapStateToProps() {
  return {
    
  }
}

export default connect(mapStateToProps)(Animation);