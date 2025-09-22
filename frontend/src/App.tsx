import React from "react";
import SlotsList from "./components/SlotsList";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";

const App: React.FC = () => {
  return (
    <div>
      <SlotsList />
      <BookingForm />
      <BookingsList />
    </div>
  );
};

export default App;
