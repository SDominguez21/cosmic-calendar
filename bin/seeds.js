const mongoose = require("mongoose");
const Card = require("../models/CosmicEvent");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  // .connect("mongodb://localhost/tarot", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

  const cards = [
    {
    name: "Perseid Meteors",
    date: [Aug 12/13], //check with moment.js documentation
    location: "",
    description: "Made of tiny space debris from the comet Swift-Tuttle, the Perseids are named after the constellation Perseus. The Perseids are one of the brighter meteor showers of the year.",
    img: "",
    },
    {
    name: "Sturgeon Moon",
    date: [aug 15, 2019],
    location: "",
    description: "August's Full Moon is known as the Sturgeon Moon, after the North American lake sturgeon.",
    img: "",
    },
    {
    name: "Harvest Moon",
    date: [sep 14],
    location: "",
    description: "The Full Moon closest to the September equinox is called the Harvest Moon. In the Northern Hemisphere, the time between successive moonrises will be shorter around this period.",
    img: "",
    },
    {
      name: "Micro Full Moon",
      date: [sep 14],
      location: "",
      description: "September's Full Moon will take place at the same time as the Moon is farthest away from the Earth on its orbit, making it a Micro Full Moon. It may look less bright than a usual Full Moon or a Supermoon.",
      img: "",
    },
    {
      name: "September Equinox",
      date: [sep 23],
      location: "",
      description: "Also known as the autumnal (fall) equinox in the Northern Hemisphere, the September Equinox is considered by many as the first day of fall.",
      img: "",
    },
    {
      name: "Draconid Meteor Shower",
      date: [oct 8/9],
      location: "",
      description: "The best time to see the shooting stars of the peaking Draconids is just before nightfall.",
      img: "",
    },
    {
      name: "",
      date: [],
      location: "",
      description: "",
      img: "",
    },

  ]; //end

  CosmicEvent.create(cosmicevent); 




const cosmicEventSchema = new Schema({
  
});

