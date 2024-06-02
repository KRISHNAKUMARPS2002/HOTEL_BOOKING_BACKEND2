const express = require("express");
const router = express.Router();
const {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelController");
const { auth, admin } = require("../middleware");

router.post("/", [auth, admin], createHotel);
router.get("/", getHotels);
router.get("/:id", getHotel);
router.put("/:id", [auth, admin], updateHotel);
router.delete("/:id", [auth, admin], deleteHotel);

module.exports = router;
