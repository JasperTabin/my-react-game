import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const developers = [
    {
      name: "Developer 1",
      responsibility: "Lead Developer",
      achievement: "Implemented core game mechanics",
    },
    {
      name: "Developer 2",
      responsibility: "UI/UX Designer",
      achievement: "Designed and implemented user interface",
    },
    // Add more developers as needed
  ];

  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to our game! Here's some information about the game and the
        talented developers behind it.
      </p>

      <h3>Game Information</h3>
      <p>
        Describe the game and its unique features, storyline, or any other
        relevant details.
      </p>

      <h3>Meet the Developers</h3>
      <div className="developers-container">
        {developers.map((developer, index) => (
          <div key={index} className="developer-card">
            <h4>{developer.name}</h4>
            <p>
              <strong>Responsibility:</strong> {developer.responsibility}
            </p>
            <p>
              <strong>Achievement:</strong> {developer.achievement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
