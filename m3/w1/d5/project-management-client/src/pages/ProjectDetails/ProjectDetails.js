//  src/pages/ProjectDetails/ProjectDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProject from './../../components/EditProject/EditProject';


class ProjectDetails extends Component {
  
  state = {
    title: " ",
    description: " ",
    tasks: []
  };

  componentDidMount() {
    this.getSingleProject();
  }

  getSingleProject = () => {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then( (apiResponse) =>{
        const theProject = apiResponse.data;
        const { title, description, tasks } = theProject;
        this.setState( { title, description, tasks } );
      })
      .catch((err) => console.log(err));
  }

  deleteProject = () => {														// <== CREATE METHOD
    const { id } = this.props.match.params;
    
    axios.delete(`http://localhost:5000/api/projects/${id}`)
    	.then( () => this.props.history.push('/projects') )	// causes Router URL change
    	.catch( (err) => console.log(err));
  }
  
  render(){
    return (
      <div>
	      <h1>Project Details</h1>

        <h2>{this.state.title}</h2>
        <h4>{this.state.description}</h4>

        <Link to={'/projects'}>
          <button>Back</button>
        </Link>

        <EditProject getTheProject={this.getSingleProject} />

        <button onClick={this.deleteProject}>
          Delete project
        </button>
      </div>
    )
  }
}

export default ProjectDetails;