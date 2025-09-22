import { Router } from "express";
import { getSlots, bookSlot, getBookings } from "../controllers/bookingController";

const router = Router();

router.get("/slots", getSlots);
router.post("/book", bookSlot);
router.get("/bookings", getBookings);

export default router;
