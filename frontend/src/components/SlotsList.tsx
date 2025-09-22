import React, { useEffect, useState } from "react";
import { getSlots } from "../utils/api";

const SlotsList: React.FC = () => {
  const [slots, setSlots] = useState<string[]>([]);

  useEffect(() => {
    getSlots().then(data => setSlots(data));
  }, []);

  return (
    <div>
      <h2>Available Slots</h2>
      <ul>
        {slots.map(slot => (
          <li key={slot}>{slot}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlotsList;
