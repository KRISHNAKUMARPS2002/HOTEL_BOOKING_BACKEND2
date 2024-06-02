const express = require("express");
const {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");
const { auth, admin } = require("../middleware");
const router = express.Router();

router.post("/:hotelId/rooms", [auth, admin], createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.put("/:id", [auth, admin], updateRoom);
router.delete("/:id", [auth, admin], deleteRoom);

module.exports = router;
