const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  type: String,
  id: String,
  owner: String,
  startDate: String,
  endDate: String,
  time: String,
  location: String,
  description: String,
  img: String
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
