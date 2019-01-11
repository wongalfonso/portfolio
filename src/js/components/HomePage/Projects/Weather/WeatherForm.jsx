import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCity, updateText } from './WeatherFormActions';


class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInputButton = this.handleInputButton.bind(this);
    this.addEnterKey = this.addEnterKey.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.addEnterKey)
  }

  addEnterKey(e) {
    if (e.code === 'Enter') {
      this.handleInputButton();
    }
  }

  handleInput(e) {
    const { dispatch } = this.props;
    dispatch(updateText(e.target.value));
  }

  handleInputButton() {
    const { dispatch, input, searchHistory } = this.props;
    dispatch(getCity(input, searchHistory));
  }

  handleClick(e) {
    e.preventDefault();
    const { dispatch, searchHistory } = this.props;
    var input = e.target.value;
    input = input.toLowerCase();
    dispatch(getCity(input, searchHistory));
  }
  renderSuccess() {
    const { name, country } = this.props;  
    
    return (
      <div>
        {(name) ? 
        <div className='weather-form-alert weather-form-alert-success'>
          <div className='text-center'>
            {`We found the city...${name} in ${country}`}
          </div>
        </div>
        : 
        <div></div>
        }
      </div>  
    )

  }

  renderWarning() {
    const { input } = this.props;
    return (
      <div className='weather-form-alert weather-form-alert-danger'>
        {`Please enter a Valid City Name, ${input} is not a valid input`}
      </div>
    )
  }

  render() {
    const { throwErr, input } = this.props;
    return (
      <div className='weather-form'>
        <div className="weather-form-input">
          <input className='form-control input'
            onChange={this.handleInput}            
            type='text' />
          <span className='weather-form-input-btn'>
            {(input.length > 2) ?
              <button className='btn btn-secondary' type='submit' onClick={this.handleInputButton}>
                Go!
              </button>
              :
              <button className='btn btn-secondary' type='submit' onClick={this.handleInputButton} disabled>
                Go!
              </button>}
          </span>
        </div>
        <div className='weather-form-btn-group' aria-label='Basic example'>
          <button onClick={this.handleClick}
            value='San Diego'>
            San Diego
          </button>
          <button onClick={this.handleClick}
            value='New York'>
            New York
          </button>
          <button onClick={this.handleClick}
            value='Washington'>
            Washington D.C.
          </button>
          <button onClick={this.handleClick}
            value='London' >
            London
          </button>
          <button onClick={this.handleClick}
            value='Tokyo'>
            Tokyo
          </button>
        </div>

        {(throwErr) ? this.renderWarning() : this.renderSuccess()}
        <div>

        </div>
      </div>

    )
  }
}


function mapStateToProps(state) {
  return {
    input: state.home.weather.input,
    throwErr: state.home.weather.throwErr,
    name: state.home.weather.name,
    country: state.home.weather.country,
    searchHistory: state.home.weather.searchHistory
  }
}

export default connect(mapStateToProps)(Form);