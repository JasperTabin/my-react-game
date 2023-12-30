import React from "react";

const MobileControls = ({ onMove }) => {
  return (
    <div className="floating-buttons">
      <button onClick={() => onMove("up")}>Up</button>
      <button onClick={() => onMove("down")}>Down</button>
      <button onClick={() => onMove("left")}>Left</button>
      <button onClick={() => onMove("right")}>Right</button>
    </div>
  );
};

export default MobileControls;
