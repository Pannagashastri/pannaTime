import React, { useState } from "react";
import Footer from "../Footer";

function App() {
  setInterval(updatedTime, 1000);
  const now = new Date().toLocaleTimeString("en-IT", { hour12: false });
  const [time, currentime] = useState(now);

  function updatedTime() {
    const freshTime = new Date().toLocaleTimeString("en-IT", { hour12: false });
    currentime(freshTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updatedTime}>Get Time</button>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
