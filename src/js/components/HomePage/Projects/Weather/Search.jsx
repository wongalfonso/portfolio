import React, { Component } from 'react';
import { connect } from 'react-redux';


class Search extends Component {

  renderTable() {
    const { searchHistory } = this.props;
    let color, history;    
    let searchArr = searchHistory.slice();    
    (searchArr.length > 4) ? history = searchArr.slice(0, 5) : history = searchArr;    
    return (
      <div className='weather-output-search'>
        <div className='weather-output-search-head'>
          Search History
        </div>
        <div className='weather-output-search-body'>
          <table >
            <tbody>
              {history.map((list, i) => {
                (i === 1 || i === 3 || i === 5) ? color = 'table-secondary' : color = 'table';             
                return (
                  <tr className={color} key={i}>
                    <td className='table-name'>{(list.city) ? list.city : list.input}</td>
                    <td className='table-info'>{list.date} {list.time}</td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  renderBasic() {
    return (
      <div className='weather-output-search'>
      </div>
    )
  }

  render() {
    const { searchHistory } = this.props;       
    return (      
      (searchHistory.length > 0 ? this.renderTable() : this.renderBasic())
    )
  }
}

function mapStateToProps(state) {
  return {
    searchHistory: state.home.weather.searchHistory,
    throwErr: state.home.weather.throwErr,    
  };
}

export default connect(mapStateToProps)(Search);