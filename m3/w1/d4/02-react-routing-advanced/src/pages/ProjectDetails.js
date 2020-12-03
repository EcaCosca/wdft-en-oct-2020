import React from 'react'
import { projects } from './../data';



function ProjectDetails(props) {

  console.log('props', props)

  const projectId = props.match.params.projectId; // coming from the params (Navbar URL)

  const foundProject = projects.find( (project)=> {
    return project.id === projectId;
  }) 

  /* 
    id: '1a',
    name: 'The Frogger Clone',
    year: 2017,
    technologies: 'JavaScript, jQuery',
    description: 'The first project game clone.',
  */

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
