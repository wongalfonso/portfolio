import React, { Component } from 'react';
import twenty from '../../../../../../public/images/twenty-dollar-bill.jpg';
import ten from '../../../../../../public/images/ten-dollar-bill.jpg';
import five from '../../../../../../public/images/five-dollar-bill.jpg';

class PosCalcTenderScreen extends Component {
  render() {
    return (
      <div className="tender-screen">
        <div className="tender-screen-cash">
          <div className="tender-screen-cash-header">
            <b><i>Quick Cash</i></b>
          </div>
          <div className="tender-screen-cash-bills">
            <img src = {twenty}/>
          </div>
          <div className="tender-screen-cash-bills">
            <img src = {ten}/>
          </div>
          <div className="tender-screen-cash-bills">
            <img src = {five}/>
          </div>
          <div className="tender-screen-cash-btns">
            <button className = 'round-up'>$ 6.00</button>
          </div>
          <div className="tender-screen-cash-btns">
            <button className = 'exact'>Cash</button>
          </div>
        </div>
        <div className="tender-screen-inputs">
          <div className="tender-screen-inputs-total">
            <div>$</div>  
            <div className = 'total-input-screen'>
            </div>
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