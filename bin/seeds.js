const mongoose = require('mongoose');
const Event = require('../models/Event');

mongoose
  // .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .connect('mongodb://localhost/CircadianCalendar', { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const event = [
  {
    id: String,
    name: 'Perseid Meteors',
    type: 'Meteor Shower',
    time: String,
    startDate: '07/17/2019',
    endDate: '08/24/2019',
    location: 'Northern Hemisphere',
    description: 'Peak: 08/12/2019-08/13/2019, Parent: Comet 109P/Swift-Tuttle',
    img: String
  },
  {
    id: String,
    name: 'Sturgeon Moon',
    type: 'Full Moon',
    time: String,
    startDate: '08/15/2019',
    endDate: '08/16/2019',
    location: 'Northern Hemisphere',
    description: "August's Full Moon named after lake sturgeon.",
    img: ''
  },
  {
    id: String,
    name: 'Harvest Moon',
    type: 'Full Moon',
    time: String,
    startDate: '09/14/2019',
    endDate: '09/15/2019',
    location: 'Northern Hemisphere',
    description:
      'The Full Moon closest to the September equinox is called the Harvest Moon. In the Northern Hemisphere, the time between successive moonrises will be shorter around this period.',
    img: ''
  },
  {
    id: String,
    name: 'Micro Full Moon',
    type: 'Full Moon',
    time: String,
    startDate: '09/14/2019',
    endDate: '09/15/2019',
    location: 'Northern Hemisphere',
    description:
      "September's Full Moon will take place at the same time as the Moon is farthest away from the Earth on its orbit, making it a Micro Full Moon. It may look less bright than a usual Full Moon or a Supermoon.",
    img: ''
  },
  {
    id: String,
    name: 'September Equinox',
    type: String,
    time: String,
    startDate: '09/23/2019',
    endDate: String,
    location: 'Northern Hemisphere',
    description:
      'Also known as the autumnal (fall) equinox in the Northern Hemisphere, the September Equinox is considered by many as the first day of fall.',
    img: ''
  },
  {
    id: String,
    name: 'Draconid Meteor Shower',
    type: 'Meteor Shower',
    time: 'just before nightfall',
    startDate: '10/06/2019',
    endDate: '10/10/2019',
    location: 'Northern Hemisphere',
    description:
      'Peak: 10/08/2019- 10/09/2019, Parent: Comet 21P/Giacobini-Zinner',
    img: ''
  },
  {
    id: String,
    name: "Hunter's Moon",
    type: 'Full Moon',
    time: String,
    startDate: '10/13/2019',
    endDate: '10/14/2019',
    location: 'Northern Hemisphere',
    description:
      "In many Native American cultures, October is the month of hunting and preparing for the upcoming winter season. This is why October's Full Moon is often called Hunter's Moon. It is sometimes known as the Blood Moon or Sanguine Moon, though in recent years, the term Blood Moon is also used to refer to a total lunar eclipse.",
    img: ''
  },
  {
    id: String,
    name: 'Orionid Meteor Shower',
    type: 'Meteor Shower',
    time: 'just after midnight and before the Sun rises',
    startDate: '10/02/2019',
    endDate: '11/07/2019',
    location: 'Both Hemispheres',
    description: 'Peak: 10/21/2019-10/22/2019, Parent: Comet 1P/Halley',
    img: ''
  },
  {
    id: String,
    name: 'Mercury Transit',
    type: 'Mercury Transit',
    time: String,
    startDate: '11/11/2019',
    endDate: '11/12/2019',
    location: 'Visible from most parts of the world',
    description:
      'Mercury, the smallest planet of our solar system, will move between the Sun and the Earth and appear as a small, dark speck of dust in front of the Sun for about 5 hours and 30 minutes. Like solar eclipses, must be viewed using specialized eyewear.',
    img: ''
  },
  {
    id: String,
    name: 'Beaver Moon',
    type: 'Full Moon',
    time: String,
    startDate: '11/12/2019',
    endDate: '11/13/2019',
    location: String,
    description:
      "November's Full Moon is called a Beaver Moon, after beavers that build their dams during this time of the year.",
    img: ''
  },
  {
    id: String,
    name: 'Leonid Meteor Shower',
    type: 'Meteor SHower',
    time: String,
    startDate: '11/06/2019',
    endDate: '11/30/2019',
    location: 'Both Hemispheres',
    description:
      'Called Leonids because the point in the sky where the meteors seem to emerge from, lies in the constellation Leo. Peak: 11/17/2019-11/18/2019, Parent: Comet 55P/Tempel-Tuttle',
    img: ''
  },
  {
    id: String,
    name: 'Cold Moon',
    type: 'Full Moon',
    time: String,
    startDate: '12/12/2019',
    endDate: String,
    location: '',
    description:
      "The year's final Full Moon in December is called a Cold Moon because of low temperatures in most locations in the Northern Hemisphere.",
    img: ''
  },
  {
    id: String,
    name: 'Geminid Meteors',
    type: 'Meteor Shower',
    time: String,
    startDate: '12/04/2019',
    endDate: '12/17/2019',
    location: 'Both Hemispheres',
    description:
      "Geminids are not associated with a comet but with an asteroid: the 3200 Phaethon. The asteroid takes about 1.4 years to orbit the Sun. During it's peak, 12/14-12/15, there is a possibility of sighting around 120 meteors per hour.",
    img: ''
  },
  {
    id: String,
    name: 'December Solstice',
    type: 'Solstice',
    time: String,
    startDate: '12/21/2019',
    endDate: String,
    location: 'Northern Hemisphere',
    description:
      'The shortest day of the year in the Northern Hemisphere. In the Southern Hemisphere, it is the longest day of the year and is called the summer solstice. Occurs when the Sun reaches its most southerly declination of -23.4 degrees. In other words, when the North Pole is tilted furthest away from the Sun.',
    img: ''
  },
  {
    id: String,
    name: 'Ursid Meteors',
    type: 'Meteor Shower',
    time: String,
    startDate: '12/17/2019',
    endDate: '12/26/2019',
    location: 'Northern Hemisphere',
    description:
      'At its peak, 12/22-12/23, observers may be able to view as many as 10 meteors in an hour. Partent: Comet 8P/Tuttle',
    img: ''
  },
  // cosmic events in 2020
  {
    id: String,
    name: String,
    type: String,
    time: String,
    startDate: String,
    endDate: String,
    location: String,
    description: ' peak + parent if meteor ',
    img: ''
  }
]; //end

Event.create(event);
