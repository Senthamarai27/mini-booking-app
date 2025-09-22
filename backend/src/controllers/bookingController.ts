import type { Request, Response } from "express";
import { getAllBookings, getBookingBySlot, createBooking } from "../services/bookingService";

const slots = ["10:00", "12:00", "14:00", "16:00"];

export const getSlots = (req: Request, res: Response) => {
  res.json(slots);
};

export const bookSlot = async (req: Request, res: Response) => {
  const { userName, userEmail, slot } = req.body;
  if (!userName || !userEmail || !slot) {
    return res.status(400).json({ message: "Invalid input" });
  }
  const existing = await getBookingBySlot(slot);
  if (existing) {
    return res.status(409).json({ message: "Slot already booked" });
  }
  const booking = await createBooking(userName, userEmail, slot);
  res.status(201).json({ message: "Booking successful", booking });
};

export const getBookings = async (req: Request, res: Response) => {
  const bookings = await getAllBookings();
  res.json(bookings);
};
