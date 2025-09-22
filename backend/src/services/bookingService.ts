import { AppDataSource } from "../config/db";
import { Booking } from "../models/Booking";

export const getAllBookings = async () => {
  return AppDataSource.getRepository(Booking).find();
};

export const getBookingBySlot = async (slot: string) => {
  return AppDataSource.getRepository(Booking).findOneBy({ slot });
};

export const createBooking = async (userName: string, userEmail: string, slot: string) => {
  const booking = new Booking();
  booking.userName = userName;
  booking.userEmail = userEmail;
  booking.slot = slot;
  return AppDataSource.getRepository(Booking).save(booking);
};
