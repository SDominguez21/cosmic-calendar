// const express = require("express");
// const router = express.Router();

// post route to create events
// post route to edit one event
// post/delete(this one!) route to delete event
// GET route to see all your events

const express = require('express');
const router  = express.Router();
const Project = require('../models/Project');
const Task    = require('../models/Task');

/* GET home page */
router.get('/', (req, res, next) => {
  // this route is actualy localhost:5000/api/events
//  because of the preface i put on this routes file in app.js
  Project.find().populate('tasks')
  .then((allTheProjects)=>{
    res.json(allTheProjects);
  })
  .catch((err)=>{
    res.json(err);
  })
});



  router.get('/details/:id', (req, res, next)=>{
    Project.findById(req.params.id).populate('tasks')
    .then((singleProject)=>{
      res.json(singleProject);
    })
    .catch((err)=>{
      res.json(err);
    })

  })



  router.post('/', (req, res, next)=>{

    Project.create({
      title: req.body.theTitle,
      description: req.body.theDescription,
      tasks: [],
      owner: req.user._id
    })
    .then((singleProject)=>{
      res.json(singleProject);
    })
    .catch((err)=>{
      res.json(err);
    })


  })

  router.post('/update/:id', (req, res, next)=>{
    Project.findByIdAndUpdate(req.params.id, {
      title: req.body.theTitle,
      description: req.body.theDescription
    })
    .then((singleProject)=>{
      res.json(singleProject);
    })
    .catch((err)=>{
      res.json(err);
    })
  })


  router.delete('/:id', (req, res, next)=>{

    Project.findById(req.params.id)
    .then((theProject)=>{


      theProject.tasks.forEach(eachTaskID => {
        Task.findByIdAndRemove(eachTaskID)
      })


      Project.findByIdAndRemove(theProject._id)
      .then((singleProject)=>{
        res.json(singleProject);
      })
      .catch((err)=>{
        res.json(err);
      })
  

    })
    .catch((err)=>{
      res.json(err);
    })

  })



  module.exports = router;