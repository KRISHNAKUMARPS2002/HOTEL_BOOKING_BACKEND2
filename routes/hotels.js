const express = require("express");
const {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelController");
const { auth, admin } = require("../middleware");
const router = express.Router();

router.post("/", [auth, admin], createHotel);
router.get("/", getAllHotels);
router.get("/:id", getHotelById);
router.put("/:id", [auth, admin], updateHotel);
router.delete("/:id", [auth, admin], deleteHotel);

module.exports = router;
