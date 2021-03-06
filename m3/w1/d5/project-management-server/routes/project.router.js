//      routes/project-routes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Project = require('./../models/project.model');
const Task = require('./../models/task.model');


// POST '/api/projects'    => to post a new projects
router.post('/projects', (req, res, next) => {
  const { title, description } = req.body;
  
  Project.create( { title, description, tasks: []  } )
    .then( (createdProject) => {
      res
        .status(201)          // Created 
        .json(createdProject);
    })
    .catch( (err) => {
      res
        .status(500)  // Internal Server Error
        .json(err)
    });
})


// GET '/api/projects'		 => to get all the projects
router.get('/projects', (req, res, next) => {
  Project
    .find()
    .populate('tasks')
    .then( (allTheProjects) => {
      res
        .status(200)          // OK
        .json(allTheProjects);
    })
    .catch( (err) => {
      res
        .status(500)      // Internal Server Error
        .json(err)
    });
})



// GET '/api/projects/:id'		 => to get a specific projects
router.get('/projects/:id', (req, res, next) => {
  const { id } = req.params;

  Project
    .findById( id )
    .populate('tasks')
    .then( (foundProject) => {
      res
        .status(200)          // OK
        .json(foundProject);
    })
    .catch( (err) => res.status(500).json(err) );
})




// PUT '/api/projects/:id' 		=> to update a specific project
// PUT '/api/projects/:id' 		=> to update a specific project
router.put('/projects/:id', (req, res, next)=>{
  const { id } = req.params;
  const { title, description } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndUpdate(id, { title, description })
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// DELETE '/api/projects/:id'   => to delete a specific project
router.delete('/projects/:id', (req, res)=>{
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202)  //  Accepted
        .send(`Document ${id} was removed successfully.`);
    })
    .catch( err => {
      res.status(500).json(err);
    })
});

module.exports = router;