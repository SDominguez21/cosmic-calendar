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





