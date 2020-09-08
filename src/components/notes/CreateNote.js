import React, { Component } from "react";

class CreateNote extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
        <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">New Note</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="description">Note Content</label>
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Create Note</button>
            <div className="center red-text">
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNote;
