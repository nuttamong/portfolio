import React, { useEffect, useState } from "react";
import "./snowfall.css"; // import ไฟล์ CSS แยก

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
