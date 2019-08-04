// const mongoose = require("mongoose");
// const Card = require("../models/CosmicEvent");

// mongoose
//   .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//   // .connect("mongodb://localhost/tarot", { useNewUrlParser: true })
//   .then(x => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch(err => {
//     console.error("Error connecting to mongo", err);
//   });

// id: String,
// name: String,
// type: String,
// time: String,
// startDate: String,
// endDate: String,
// location: String,
// description: String,
// img: String

//   const cards = [
//     {
//     name: "Perseid Meteors",
//     date: [july 17- august 24] , //check with moment.js documentation
//     // peak: [Aug 12/13],
//     // parent:	109P/Swift-Tuttle,
//     location: "Northern Hemisphere",
//     description: "Made of tiny space debris from the comet Swift-Tuttle, the Perseids are named after the constellation Perseus. The Perseids are one of the brighter meteor showers of the year.",
//     img: "",
//     },
//     {
//     name: "Sturgeon Moon",
//     date: [aug 15, 2019],
//     // peak: [],
//     // parent:
//     location: "",
//     description: "August's Full Moon is known as the Sturgeon Moon, after the North American lake sturgeon.",
//     img: "",
//     },
//     {
//     name: "Harvest Moon",
//     date: [sep 14],
//     // peak: [],
//     // parent:
//     location: "",
//     description: "The Full Moon closest to the September equinox is called the Harvest Moon. In the Northern Hemisphere, the time between successive moonrises will be shorter around this period.",
//     img: "",
//     },
//     {
//       name: "Micro Full Moon",
//       date: [sep 14],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "September's Full Moon will take place at the same time as the Moon is farthest away from the Earth on its orbit, making it a Micro Full Moon. It may look less bright than a usual Full Moon or a Supermoon.",
//       img: "",
//     },
//     {
//       name: "September Equinox",
//       date: [sep 23],
//       // peak: [],
//       // parent:
//       location: "Northern Hemisphere",
//       description: "Also known as the autumnal (fall) equinox in the Northern Hemisphere, the September Equinox is considered by many as the first day of fall.",
//       img: "",
//     },
//     {
//       name: "Draconid Meteor Shower",
//       date: [oct 6- 10],
//       // peak: [oct 8-9],
//       // parent: 21P/Giacobini-Zinner,
//       location: "Northern Hemisphere",
//       description: "The best time to see the shooting stars of the peaking Draconids is just before nightfall.",
//       img: "",
//     },
//     {
//       name: "Hunter's Moon",
//       date: [oct 13],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "In many Native American cultures, October is the month of hunting and preparing for the upcoming winter season. This is why October's Full Moon is often called Hunter's Moon. It is sometimes known as the Blood Moon or Sanguine Moon, though in recent years, the term Blood Moon is also used to refer to a total lunar eclipse.",
//       img: "",
//     },
//     {
//       name: "Orionid Meteor Shower",
//       date: [oct 2 - nov 7],
//       // peak: [oct 21-22],
//       // Parent:	1P/Halley,
//       location: "Both Hemispheres",
//       description: "The Orionid meteor shower is created by debris and dust left by Comet Halley. The best time to see these shooting stars is just after midnight and before the Sun rises.",
//       img: "",
//     },
//     {
//       name: "Mercury Transit",
//       date: [Nov 11/12],
//       // peak: [],
//       // parent:
//       location: "Visible from most parts of the world",
//       description: "Mercury, the smallest planet of our solar system, will move between the Sun and the Earth and appear as a small, dark speck of dust in front of the Sun for about 5 hours and 30 minutes. Like solar eclipses, must be viewed using specialized eyewear.",
//       img: "",
//     },
//     {
//       name: "Beaver Moon",
//       date: [Nov 12],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "November's Full Moon is called a Beaver Moon, after beavers that build their dams during this time of the year.",
//       img: "",
//     },
//     {
//       name: "Leonid Meteor Shower",
//       date: [Nov 6-30],
//       // peak: [Nov 17/18],
//       // parent: 55P/Tempel-Tuttle
//       location: "Both Hemispheres",
//       description: "The shower is called Leonids because its radiant, or the point in the sky where the meteors seem to emerge from, lies in the constellation Leo.",
//       img: "",
//     },
//     {
//       name: "Cold Moon",
//       date: [dec 12],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "The year's final Full Moon in December is called a Cold Moon because of low temperatures in most locations in the Northern Hemisphere.",
//       img: "",
//     },
//     {
//       name: "Geminid Meteors",
//       date: [dec 4-17],
//       // peak: [dec 14-15],
//       // parent: 3200 Phaethon
//       location: "Both Hemispheres",
//       description: "Unlike most other meteor showers, the Geminids are not associated with a comet but with an asteroid: the 3200 Phaethon. The asteroid takes about 1.4 years to orbit the Sun. During it's peak, there is a possibility of sighting around 120 meteors per hour.",
//       img: "",
//     },
//     {
//       name: "December Solstice",
//       date: [Dec 21],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "The shortest day of the year in the Northern Hemisphere. In the Southern Hemisphere, it is the longest day of the year and is called the summer solstice. Occurs when the Sun reaches its most southerly declination of -23.4 degrees. In other words, when the North Pole is tilted furthest away from the Sun.",
//       img: "",
//     },
//     {
//       name: "Ursid Meteors",
//       date: [dec 17-26],
//       // peak: [dec 22-23],
//       // parent: 8P/Tuttle
//       location: "Northern Hemisphere",
//       description: "At its peak, observers may be able to view as many as 10 meteors in an hour.",
//       img: "",
//     },
//     // cosmic events in 2020
//     {
//       name: "",
//       date: [],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "",
//       img: "",
//     },
//     {
//       name: "",
//       date: [],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "",
//       img: "",
//     },
//     {
//       name: "",
//       date: [],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "",
//       img: "",
//     },
//     {
//       name: "",
//       date: [],
//       // peak: [],
//       // parent:
//       location: "",
//       description: "",
//       img: "",
//     },

//   ]; //end

//   CosmicEvent.create(cosmicevent);

// const cosmicEventSchema = new Schema({

// });
