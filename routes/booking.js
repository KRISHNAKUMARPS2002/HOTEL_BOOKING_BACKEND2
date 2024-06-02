const express = require("express");
const {
  createBooking,
  getBookingsForUser,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");
const { auth } = require("../middleware");
const router = express.Router();

router.post("/:roomId/book", auth, createBooking);
router.get("/", auth, getBookingsForUser);
router.get("/:id", auth, getBookingById);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);

module.exports = router;
