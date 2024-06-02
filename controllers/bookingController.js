const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const { roomId, userId, checkInDate, checkOutDate, status } = req.body;

  try {
    const booking = new Booking({
      roomId,
      userId,
      checkInDate,
      checkOutDate,
      status,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

exports.getBookingsForUser = async (req, res) => {
  const userId = req.user._id;

  try {
    const bookings = await Booking.find({ userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
