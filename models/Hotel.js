const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, default: null },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
