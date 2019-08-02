const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
 id: [String],
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;