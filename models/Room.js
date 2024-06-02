const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  roomNumber: { type: String, required: true },
  type: { type: String, required: true, enum: ["single", "double", "suite"] },
  price: { type: Number, required: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
