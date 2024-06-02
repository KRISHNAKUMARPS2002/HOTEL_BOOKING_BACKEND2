const Room = require("../models/Room");

exports.createRoom = async (req, res) => {
  const { hotelId, roomNumber, type, price } = req.body;

  try {
    const room = new Room({ hotelId, roomNumber, type, price });
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).send("Room not found");
    res.status(200).json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!room) return res.status(404).send("Room not found");
    res.status(200).json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndRemove(req.params.id);
    if (!room) return res.status(404).send("Room not found");
    res.status(200).json({ msg: "Room removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
