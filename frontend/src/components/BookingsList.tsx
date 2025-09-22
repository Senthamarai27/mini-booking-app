import React, { useEffect, useState } from "react";
import { getBookings } from "../utils/api";

const BookingsList: React.FC = () => {
  const [bookings, setBookings] = useState<{id: number, userName: string, userEmail: string, slot: string}[]>([]);

  useEffect(() => {
    getBookings().then(data => setBookings(data));
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map(({ id, userName, userEmail, slot }) => (
          <li key={id}>{userName} ({userEmail}) booked {slot}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
