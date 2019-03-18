import React, { Component } from 'react';
import { connect } from 'react-redux';


class Pagination extends Component {

  renderEmpty() {
    return (
      <div className = 'pagination pagination-empty'>        
      </div>
    )
  }  
  renderPag() {
    const { searchLength, currentPage } = this.props;       
    let arrLength = searchLength.length - 1;
    let pageArr = [];
    let loopLength;
    if (currentPage === arrLength) {
      loopLength = 6
    } else if (currentPage === 0 || currentPage === (arrLength - 1)) {
      loopLength = 7  
    } else if (currentPage === 1 || currentPage === (arrLength - 2)) {
      loopLength = 8
    } else if (currentPage === 2 || currentPage === (arrLength - 3)) {
      loopLength = 9
    } else if (currentPage === 3 || currentPage === (arrLength - 4)) {
      loopLength = 10
    } else if (currentPage > 3 || currentPage < (arrLength - 5)) {
      loopLength = 11
    }

for (let i = 0; i < loopLength; i ++) {
  let pageNumber;
  if (currentPage < arrLength + 1 && currentPage > 4) {
    pageNumber = currentPage - 4;
    pageNumber += i
  } else {
    pageNumber = i;
  }

  if (i === 0) {
    pageArr.push('<')
  } else if (i === 1) {
    pageArr.push(1);
  } else if ((loopLength == 11 && i == 2 && currentPage - 4 !== 0 && currentPage - 5 !== 0)|| (i == 2 && pageNumber > 3 )) {
    pageArr.push('...');
  } else if (i == loopLength -3 && pageNumber !== arrLength - 1) {
    pageArr.push('...');
  } else if (i == loopLength -2 && pageNumber !== arrLength) {
    pageArr.push(arrLength);
  } else if (i === loopLength -1) {
    pageArr.push('>');     
  } else {
    pageArr.push(pageNumber);
  }
}    let name, page;
    if ( currentPage === arrLength) {
      page = currentPage;
    } else {
      page = currentPage + 1;
    }
    return (
      <div className = 'pagination pagination-active'>
        <ul className = 'pagination-ul'>          
          {pageArr.map((num, i) => {            
            return (
              (page == num || (num == '<' && page ==1) || num == '...' || (page === arrLength) && (num == '>')) ? 
                <li key = {i} className = 'pagination-ul-li pagination-ul-li-disabled'>
                  <a>{num}</a>
                </li> :                      
                <li key = {i} className = 'pagination-ul-li pagination-ul-li-active' onClick = {() => this.props.updatePage(num)}>
                  <a>{num}</a>
                </li>
            )
          })}
        </ul>
      </div>
    )
  }
  render() {
    return (
      (this.props.searchLength.length > 0) ? this.renderPag() : this.renderEmpty()
    )
  }
}

function mapStateToProps(state) {
  return {    
    searchLength: state.home.pokedex.searchLength,
    currentPage: state.home.pokedex.currentPage
  }
}

export default connect(mapStateToProps)(Pagination)