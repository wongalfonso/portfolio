import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import ProjectClose from '../../ProjectClose';
import { addWeight, updateList, selectedPlanet, checked, calculateWeight } from './AstroWeightActions';

class AstroWeight extends Component {
  constructor(props) {
    super(props);
    this.handleWeight = this.handleWeight.bind(this);
    this.handlePlanets = this.handlePlanets.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(updateList());
  }

  handleWeight(e) {
    const { weight, dispatch } = this.props;
    const newWeight = (e.target.validity.valid) ? e.target.value : weight
    dispatch(addWeight(newWeight));
  }

  handlePlanets(e) {
    const { dispatch } = this.props;
    let value = e.target.value;
    value = value.split(',')
    dispatch(selectedPlanet(value[1], value[0]));
  }
  handleChecked(e) {
    const { dispatch } = this.props;
    dispatch(checked(e.target.checked));
  }

  submit(e) {
    e.preventDefault();
    let message;
    const { weight, planetValue, planetName, dispatch } = this.props;
    dispatch(calculateWeight(weight, planetName, planetValue));
  }
  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From Astro Modal'
    })
  }

  render() {
    let { planetList, weight, checked, output, newWeight, planetName } = this.props;
    let list;    
    if (checked) { list = planetList.slice(); list.splice(11, 1) }
    if (checked === false) { list = planetList };
    return (
      <div id='astroWeightProject'>
        <div className='container astro-container'>
          <div className="astro-header">
            <header className='astro-header'>
              Astro Weight Calculator
            </header>
          </div>
          <div className="astro-content">
            <form onSubmit={this.submit} className='astro-form'>
              <div className='astro-form-group'>
                <label htmlFor='inputWeight'
                  className='astro-form-group-input-label'>
                  Enter Your Weight
                </label>
                <input className='astro-form-group-input'
                  type='text'
                  placeholder='Weight(lbs)'
                  id='inputWeight'
                  onChange={this.handleWeight}
                  value={weight}
                  pattern='^([1-9]+)([0-9]*)(\.[0-9]{0,2})?$'
                />
              </div>

              <div className='astro-form-group'>
                <label className='astro-form-group-select-label'>
                  Select A Planet
                </label>
                <select onChange={this.handlePlanets}
                  className='astro-form-group-select'>
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
                <input type='checkbox'
                  className='astro-form-group-check-checkbox'
                  id='formCheck'
                  onChange={this.handleChecked}
                />
                <label className='astro-form-group-checkbox-label'
                  htmlFor='formCheck'>
                  {(checked) ? 'How Dare you Remove Pluto!' : 'Check to remove Pluto'}
                </label>
              </div>


              <div className='astro-form-group'>
                {
                  (weight.length > 0 && planetName !== '') ? <button className='astro-form-group-btn'
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
              {(newWeight) ? output : ''}
            </div>

          </div>
          <ProjectClose
            white='white'
            github={this.github}
            close={this.props.closeModal}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weight: state.home.astro.weight,
    planetValue: state.home.astro.planetValue,
    planetName: state.home.astro.planetName,
    planetList: state.home.astro.planetList,
    checked: state.home.astro.checked,
    newWeight: state.home.astro.newWeight,
    output: state.home.astro.output,
  }
}

export default connect(mapStateToProps)(AstroWeight);