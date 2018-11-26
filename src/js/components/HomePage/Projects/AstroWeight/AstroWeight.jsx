import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ProjectClose from '../../ProjectClose';

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['The Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['The Sun', 27.9]
];

export default class AstroWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      planetValue: 0,
      planetName: '',
      planetList: [],
      checked: false,
      newWeight: '',
      output: '',
    }
    this.handleWeight = this.handleWeight.bind(this);
    this.handlePlanets = this.handlePlanets.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    planets.push('a');
    planets = planets.reverse()
    this.setState({
      planetList: planets,
    })
  }
  handleWeight(e) {
    const newWeight = (e.target.validity.valid) ? e.target.value : this.state.weight
    this.setState({ weight: newWeight })
  }
  handlePlanets(e) {
    let value = e.target.value;
    value = value.split(',')
    this.setState({ planetValue: value[1], planetName: value[0], output: '' })
  }
  handleChecked(e) {
    this.setState({ checked: e.target.checked })
  }
  submit(e) {
    e.preventDefault();
    let message;
    const { weight, planetValue, planetName } = this.state;
    let planetWeight = Number(weight) * Number(planetValue)
    planetWeight = planetWeight.toFixed(2);


    message = 'If you were on ' + planetName + '. You would weigh ' + planetWeight + ' lbs';
    if (planetName === 'Earth') { message = 'If you Chose "Earth", Then you should weigh ' + planetWeight + ' lbs'; }
    if (planetName === 'Pluto') { message = 'If you were on the tiny Planet Pluto, then you would weigh ' + planetWeight + ' lbs'; }

    this.setState({ newWeight: planetWeight, output: message })
  }
  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From Astro Modal'
    })
  }

  render() {
    let { planetList, checked, output } = this.state;
    let list;
    if (checked) { list = planetList.slice(); list.splice(11, 1) }
    if (checked === false) { list = planetList };
    return (
      <div id='astroWeightProject'>
        <div className='container astro-container'>    
          <div className="astro-header">
            <header className = 'astro-header'>
              Astro Weight Calculator
            </header>
          </div>
          <div className="astro-content">
            <form onSubmit={this.submit} className = 'astro-form'>
              <div className='astro-form-group'>
                <label  htmlFor='inputWeight' 
                        className='astro-form-group-input-label'>
                    Enter Your Weight
                </label>
                <input  className='astro-form-group-input' 
                        type='text' 
                        placeholder='Weight(lbs)' 
                        id='inputWeight' 
                        onChange={this.handleWeight} 
                        value={this.state.weight} 
                        pattern='^([1-9]+)([0-9]*)(\.[0-9]{0,2})?$'
                />
              </div>

              <div className='astro-form-group'>
                <label className='astro-form-group-select-label'> 
                  Select A Planet 
                </label>
                <select   onChange={this.handlePlanets}
                          className = 'astro-form-group-select'>
                  {list.map((planet, i) => {
                    if (planet === 'a') return <option key={i} hidden>Planets</option>
                    return (
                      <option key={i} value={planet}>
                        {planet[0]}
                      </option>
                    )
                  })}
                </select>
              </div>                
              <div className='astro-form-group astro-form-group-check'>
                <input  type='checkbox' 
                        className='astro-form-group-check-checkbox' 
                        id='formCheck' 
                        onChange={this.handleChecked} 
                />
                <label  className='astro-form-group-checkbox-label' 
                        htmlFor='formCheck'>
                  {(this.state.checked) ? 'How Dare you Remove Pluto!' : 'Check to remove Pluto'}
                </label>
              </div>
              

              <div className='astro-form-group'>
                {
                  (this.state.weight.length > 0 && this.state.planetName !== '') ? <button className='astro-form-group-btn' 
                  type='submit' 
                  id='astroCalculate'> 
                    Calculate 
                  </button> : 
                  <button   
                    className='astro-form-group-btn' 
                    type='submit' 
                    id='astroCalculate' 
                    disabled> 
                    Calculate
                </button>
                }
              </div>
            </form>
            <div className='astro-output'>
              {(this.state.newWeight) ? output : ''}
            </div>
          
          </div>
          <ProjectClose
            white = 'white'
          />
        </div>
      </div>
    )
  }
}
