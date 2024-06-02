const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  status: {
    type: String,
    required: true,
    enum: ["booked", "checked-in", "checked-out", "canceled"],
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
