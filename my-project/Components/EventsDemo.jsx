import React, { useState } from "react";

const EventsDemo = () => {
  const [screen, setScreen] = useState("");
  const handleclick = () => {
    console.log("You clicked!");
    setScreen("You clicked!");
  };
  return (
    <div>
      <p>{screen}</p>
      <button onClick={handleclick} className="cursor-pointer">
        Update the text
      </button>
    </div>
  );
};

export default EventsDemo;
