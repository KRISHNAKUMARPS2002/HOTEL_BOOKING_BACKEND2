const Hotel = require("../models/Hotel");

exports.createHotel = async (req, res) => {
  const { name, location, rating } = req.body;

  try {
    const hotel = new Hotel({ name, location, rating });
    await hotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// Add other hotel controller methods (getHotelById, updateHotel, deleteHotel) as needed
