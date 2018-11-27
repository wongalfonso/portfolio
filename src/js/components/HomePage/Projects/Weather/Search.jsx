import React from 'react';
import { connect } from 'react-redux';


class Search extends React.Component {

  renderTable() {
    const { searchHistory } = this.props;
    var color, history;
    var length = searchHistory.length;
    var searchArr = searchHistory.slice(0, length - 1);
    (searchArr.length > 4) ? history = searchArr.slice(0, 5) : history = searchArr;
    return (
      <div className='weather-output-search'>
        <div className='weather-output-search-head'>
          Search History
        </div>
        <div className='weather-output-search-body'>
          <table >
            <tbody>
              {history.map((history, i) => {
                (i === 1 || i === 3 || i === 5) ? color = 'table-secondary' : color = 'table';
                return (
                  <tr className={color} key={i}>
                    <td className='table-name'>{history.data.name}</td>
                    <td className='table-info'>{history.date} {history.time}</td>
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
    const message = 'No Search Items so Far....'
    return (
      <div className='weather-output-search'>
        {/* <div className='weather-output-search'>
          <table className='weather-output-search-table'>
            <tbody>
              <tr><td className='weatherTd'><b>{message}</b></td></tr>
            </tbody>
          </table>
        </div> */}
      </div>
    )
  }

  render() {
    const { searchHistory } = this.props;
    return (
      (searchHistory.length > 1 ? this.renderTable() : this.renderBasic())
    )
  }
}

function mapStateToProps(state) {
  return {
    searchHistory: state.weather.data,
    throwErr: state.weather.throwErr,
    cache: state.weather.cache
  };
}

export default connect(mapStateToProps)(Search);