const Room = require("../models/Room");

exports.createRoom = async (req, res) => {
  const { hotelId, roomNumber, type, price } = req.body;

  try {
    const room = new Room({ hotelId, roomNumber, type, price });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
