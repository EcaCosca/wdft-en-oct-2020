import React, { Component } from 'react'


class AddMovie extends Component {
  state = {
    title: "",
    director: "",
    IMDbRating: 0,
    hasOscars: false
  }
  // 1. Control the data saved in the form   2.Update the form on user input 3. Handle submit

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState( { [name]: value } )
//  this.setState( { title: value } )
  }

  handleOscarsCheck = (event) => {
    const value = event.target.checked;
    this.setState( { hasOscars: value } )
  }

  // ADDITIONAL EXAMPLE:
  // Dynamic method that can be used for both inputs and checkboxes (such as hasOscars input)
  handleChange = e => {
    // Each input has a `name` same as the corresponding `state` field name.
    let { name, value, type } = e.target;

    // If event is caused by an input of ` type="checkbox" `
    if (type === "checkbox") {
      value = !this.state[name]; // toggle the boolean value
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    // prevent the page from reloading
    event.preventDefault();

    const newMovie = this.state;
    // Save the movie in the array of movies displayed
    this.props.createMovie(newMovie)
    // Clear the form, by setting the state to initial values
    this.setState( { title: "", director: "", IMDbRating: 0, hasOscars: false } )
  }

  render() {
    return (
      <div style={{ border: '1px solid red', padding: '20px'}}>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input type="text" name="title"  value={this.state.title} onChange={this.handleInput} />
          <br/>

          <label>Director: </label>
          <input type="text" name="director" value={this.state.director} onChange={this.handleInput}/>
          <br/>

          <label>Rating: </label>
          <input type="number" name="IMDbRating" value={this.state.IMDbRating} onChange={this.handleInput}/>
          <br/>

          <label>Oscar Awarded:</label>
          <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={this.handleChange}/>
          <br/>

          <button type="submit"> Create A Movie </button>
        </form>
      </div>
    )
  }
}


export default AddMovie