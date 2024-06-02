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
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getBookingsForUser = async (req, res) => {
  const userId = req.user._id;

  try {
    const bookings = await Booking.find({ userId });
    res.status(200).json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getBookingById = async (req, res) => {
  const id = req.params.id;

  try {
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateBooking = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const booking = await Booking.findByIdAndUpdate(id, updates, { new: true });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const booking = await Booking.findByIdAndRemove(id);
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).json({ message: "Booking deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
