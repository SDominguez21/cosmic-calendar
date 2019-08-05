const express = require('express');
const router = express.Router();
const request = require('request');
const rp = require('request-promise');

/* GET home page */
router.get('/', (req, res, next) => {
  // res.render('index');
  // console.log("+++++++++++++++++++++++++");
  res.json({ message: "it's ok" });
});

router.get('/allCallsForMonth', async (req, res, next) => {
  console.log('hello you rang?');

  // dummy info in arrays
  let weather = [];
  // HARDCODE TEST{ weather: 'partly cloudy, chance of rain', highTempF: '90 degrees',lowTemp: '87 degreese'}
  let moon = [];
  // HARDCODE TEST { name: 'fullmoon', date: 'August 4, 2019' }
  let cosmicEvent = { name: "Merlin's Beard", type: 'meteor shower' };
  await rp
    .get({
      url:
        'https://api.aerisapi.com/forecasts/miami,fl?filter=daynight&limit=60&format=json&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR'
    })
    .then(data => {
      weather.push(...JSON.parse(data).response[0].periods);
      // console.log(weather);
    });
  await rp
    .get({
      url:
        'https://api.aerisapi.com/sunmoon/moonphases?limit=31&miami,fl&from=08/02/2019&format=json&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR'
    })
    .then(data => {
      moon.push(...JSON.parse(data).response);
    });

  res.send({
    weather: weather,
    moon: moon,
    cosmic: cosmicEvent
  });
});
module.exports = router;

// const express = require('express');
// const router  = express.Router();
// // const  = require('../models/');
// // const     = require('../models/');

// // post route to create events
// // post route to edit one event
// // post/delete(this one!) route to delete event
// // GET route to see all your events

// /* GET home page */
// router.get('/', (req, res, next) => {
//   // this route is actualy localhost:5000/api/events
// //  because of the preface i put on this routes file in app.js
//   Project.find().populate('tasks')
//   .then((allTheProjects)=>{
//     res.json(allTheProjects);
//   })
//   .catch((err)=>{
//     res.json(err);
//   })
// });

//   router.get('/details/:id', (req, res, next)=>{
//     Project.findById(req.params.id).populate('tasks')
//     .then((singleProject)=>{
//       res.json(singleProject);
//     })
//     .catch((err)=>{
//       res.json(err);
//     })

//   })

//   router.post('/', (req, res, next)=>{

//     Project.create({
//       title: req.body.theTitle,
//       description: req.body.theDescription,
//       tasks: [],
//       owner: req.user._id
//     })
//     .then((singleProject)=>{
//       res.json(singleProject);
//     })
//     .catch((err)=>{
//       res.json(err);
//     })

//   })

//   router.post('/update/:id', (req, res, next)=>{
//     Project.findByIdAndUpdate(req.params.id, {
//       title: req.body.theTitle,
//       description: req.body.theDescription
//     })
//     .then((singleProject)=>{
//       res.json(singleProject);
//     })
//     .catch((err)=>{
//       res.json(err);
//     })
//   })

//   router.delete('/:id', (req, res, next)=>{

//     Project.findById(req.params.id)
//     .then((theProject)=>{

//       theProject.tasks.forEach(eachTaskID => {
//         Task.findByIdAndRemove(eachTaskID)
//       })

//       Project.findByIdAndRemove(theProject._id)
//       .then((singleProject)=>{
//         res.json(singleProject);
//       })
//       .catch((err)=>{
//         res.json(err);
//       })

//     })
//     .catch((err)=>{
//       res.json(err);
//     })

//   })

//   module.exports = router;
