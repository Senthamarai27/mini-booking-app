import axios from "axios";

const API_BASE = "http://localhost:4000";

export const getSlots = async (): Promise<string[]> => {
  const response = await axios.get(`${API_BASE}/slots`);
  return response.data;
};

export const bookSlot = async (data: { userName: string; userEmail: string; slot: string; }) => {
  const response = await axios.post(`${API_BASE}/book`, data);
  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(`${API_BASE}/bookings`);
  return response.data;
};
