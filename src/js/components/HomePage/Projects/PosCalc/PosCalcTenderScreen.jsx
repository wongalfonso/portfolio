import React, { Component } from 'react';

class PosCalcTenderScreen extends Component {
  render() {
    return (
      <div className="tender-screen">
        <div className="tender-screen-cash">
          <div className="tender-screen-cash-header">
            Quick Cash
          </div>
          <div className="tender-screen-cash-twenty">
            <img/>
          </div>
          <div className="tender-screen-cash-ten">
          <img/>
          </div>
          <div className="tender-screen-cash-five">
          <img/>
          </div>
          <div className="tender-screen-cash-exact">
            <button></button>
          </div>
        </div>
        <div className="tender-screen-inputs">
          <div className="tender-screen-inputs-total">
            $
            <div></div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>1</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>2</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>3</button>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>4</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>5</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>6</button>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>7</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>8</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>9</button>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>0</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>00</button>
            </div>            
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>Exact Tender</button>
            </div>     
          </div>
        </div>
      </div>
    )
  }
}


export default PosCalcTenderScreen;