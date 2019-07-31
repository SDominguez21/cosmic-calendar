const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cosmiceventSchema = new Schema({
  name: String,
  date: [String], //check with moment.js documentation date/period if meteor 
  // peak: [String], BASED ON MIAMI 
  //meeteor shower having parent comet--parent: String
  location: String,
  description: String,
  img: String
});

const CosmicEvent = mongoose.model("CosmicEvent", cosmiceventSchema);

module.exports = CosmicEvent;

// SHOULD I HAVE A DIFFERENT MODEL FOR EACH DIFFERENT KIND OF EVENT? i.e Full moon, meteor shower, solstice, ect.