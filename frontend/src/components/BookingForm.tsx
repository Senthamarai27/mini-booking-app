import React, { useState } from "react";
import { bookSlot } from "../utils/api";
import FeedbackToast from "./FeedbackToast";

const BookingForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState("");
  const [feedback, setFeedback] = useState<{ message: string; type: "success" | "error" | "loading" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({ message: "Booking in progress...", type: "loading" });
    try {
      const response = await bookSlot({userName: name, userEmail: email, slot});
      setFeedback({ message: response.message, type: "success" });
    } catch (error: any) {
      setFeedback({ message: error.response?.data?.message || "Failed to book slot", type: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Slot" value={slot} onChange={e => setSlot(e.target.value)} required />
      <button type="submit">Book Slot</button>
      {feedback && <FeedbackToast type={feedback.type} message={feedback.message} />}
    </form>
  );
};

export default BookingForm;
