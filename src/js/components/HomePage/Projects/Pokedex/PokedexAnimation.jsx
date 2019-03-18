import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokeBall from '../../../../../../public/images/pokeBall.png';
import backgroundVid from '../../../../../../public/video/pokemonAnimation.mp4';
import { stopAnimation } from './PokedexActions';


class Animation extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    this.setTimeout(() => {
      dispatch(stopAnimation());
    }, 4000);
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