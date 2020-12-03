import React from 'react'
import { projects } from './../data';



function ProjectDetails(props) {

  const projectId = props.match.params.projectId; // coming from the params (Navbar URL)

  const foundProject = projects.find( (project)=> {
    return project.id === projectId;
  }) 

  return (
    <div>
      <h1>Project Details</h1>
      <h2>{foundProject.name}</h2>
      <h3>Used Technologies: {foundProject.technologies}</h3>
      <p>{foundProject.description}</p>

    </div>
  )
}

export default ProjectDetails
