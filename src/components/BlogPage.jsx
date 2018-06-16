import React, { Component } from "react";
import axios from "axios";

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      instructions: "",
      process: "",
      answer: "",
      response: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state.type, this.state.name, this.state.instructions, this.state.process, this.state.answer)
    axios.post("/codewars", { type: this.state.type, description: { name: this.state.name, instructions: this.state.instructions, thinking: this.state.process, answer: this.state.answer } }).then((resp) => {
      console.log(resp)
      this.setState({
        response: resp
      })
    })
      .catch((err) => {
        console.log(err);
        this.setState({
          response: err
        })
      })
  }


  render() {
    console.log(this.state.response);
    return (
      <div className="container bioBody">
        <div className="row" >
          <div className="col-12 text-center" id="blogHeader">
            <h2>Post Your Kyu Here!</h2>
          </div>
        </div>
        <form onSubmit={this.submitForm}>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="kyuSelect" >Kyu</label>
              <select className="form-control" id="kyuSelect" name="type" onChange={this.handleInput}>
                <option hidden>Select Kyu</option>
                <option>8 Kyu</option>
                <option>7 Kyu</option>
                <option>6 Kyu</option>
                <option>5 Kyu</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label className="label" htmlFor="kyuName">Kyu Name</label>
              <input className="form-control" placeholder="Enter Kyu Name" id="kyuName" name="name" onChange={this.handleInput} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <label className="label" htmlFor="instructions">Enter Instructions of Kyu</label>
              <textarea className="form-control blogText" name="instructions" id="instructions" onChange={this.handleInput} placeholder="type instructions here"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <label className="label" htmlFor="process">Enter your though process</label>
              <textarea onChange={this.handleInput} id="process" name="process" placeholder="enter your process here" className="form-control blogText"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <label className="label" htmlFor="answer">Enter your though process</label>
              <textarea onChange={this.handleInput} id="answer" name="answer" placeholder="enter your answer here" className="form-control blogText"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <button type = "submit" className = "btn btn-success float-right submitBtn">Submit</button> 
            </div>            
          </div>
          <div className = "row">
            <div className="has-success col-12 text-center">
              <div className="form-control">
              
              </div>
            </div>
          </div>


        </form>
      </div>
    )
  }
}