const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cosmiceventSchema = new Schema({
  name: String,
  date: [String],
  location: String,
  description: String,
  img: String
});

const CosmicEvent = mongoose.model("CosmicEvent", cosmiceventSchema);

module.exports = CosmicEvent;