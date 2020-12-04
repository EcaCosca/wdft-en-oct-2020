import React, { Component } from 'react'
import axios from 'axios';

class AddProject extends Component {
  state = {
    title: '',
    description: ''
  }


  handleFormSubmit = (event) => {
    event.preventDefault();

    const { title, description } = this.state;

    axios.post('http://localhost:5000/api/projects', { title, description } )
      .then( () => {
        // refresh the project list by calling the method 
        // from the `ProjectList` component
        this.props.getAllProjects();
        // Reset the form fields
        this.setState({ title: '', description: '' })
      })
      .catch( (err) => console.log(err));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState( { [name]: value } );
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input 
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <label>Description:</label>
          <textarea 
            type="text" 
            name="description"
            onChange={this.handleChange}
            value={this.state.description}  
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default AddProject;