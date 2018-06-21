import React, { Component } from "react";
import Modal from "react-modal";
import { Redirect, Link } from "react-router-dom";
import { postBlog } from "./PageBlogActions";

const customStyles = {
  content: {
    backgroundColor: "lightGrey",
    fontWeight: "bold",
    fontSize: "20px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class PageBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      instructions: "",
      process: "",
      answer: "",
      response: [],
      modalIsOpen: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterModalIsOpen = this.afterModalIsOpen.bind(this);
  }

  handleInput(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  afterModalIsOpen() {
    this.subtitle.style.color = '#f00';
  }

  submitForm(e) {
    e.preventDefault();
    const { dispatch, user } = this.props;    
    const type = this.state.type;
    const name = this.state.name;
    const instructions = this.state.instructions;
    const thinking = this.state.process;
    const answer = this.state.answer;
    const username = user.user.username;
    dispatch(postBlog(type, name, instructions, thinking, answer, username));
  }


  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="container bioBody">
        {(isLoggedIn !== true) && <Redirect from = "/blogpage" to = "/login"/> }
        <div className="row" >
          <div className="col-12 text-center" id="blogHeader">
            <h2>Post Your Kyu Here!</h2>
            <hr />
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
              <label className="label" htmlFor="process">Enter your thought process</label>
              <textarea onChange={this.handleInput} id="process" name="process" placeholder="enter your process here" className="form-control blogText"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <label className="label" htmlFor="answer">Enter your answer</label>
              <textarea onChange={this.handleInput} id="answer" name="answer" placeholder="enter your answer here" className="form-control blogText"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <div className="col-8 float-right">
                <button type="button" className="btn btn-warning  cancelBtn" onClick={this.openModal}>Cancel</button>
                <button type="submit" className="btn btn-success  submitBtn">Submit</button>
              </div>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
              <div className="blogModal">
                <div className="row textModal">
                  <div className="col-12 text-center">
                    <span> Are You Sure You Want To Cancel?</span>
                  </div>
                </div>
                <div className="col-12 form-group">
                  <button className="btn btn-danger modalBtn" onClick={this.closeModal}>No</button>
                  <Link to="/profile"><button className="btn btn-success modalBtn" onClick={this.closeModal}>Yes</button></Link>
                </div>

              </div>
            </Modal>
          </div>
          <div className="row">
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

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     isLoggedIn: state.user.isLoggedIn,
//     blog: state.blog
//   }
// }

// export default connect(mapStateToProps)(BlogPage);