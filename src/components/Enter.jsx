import React, { useState } from "react";
import "../styles/Enter.css";

export const Enter = () => {
  const [input, setInput] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedText([...displayedText, input]);
    setInput("");
  };

  return (
    <header>
      <div className="yourOpinion">
        <img src="" alt="profile photo" />
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="ახალი აზრებს, ხომ არ გაგვიზიარებ ნიკოლოზ"
        />
      </div>
      <div className="bottomMain">
        <div className="live">
        <img src={"src/Images/camera.jpg"} alt="My Image" />
          <p>პირდაპირი ვიდეომაუწყებლობა</p>
        </div>
        <div className="photoAndVideo">
          <img src="./photo.png" alt="photos" />
          <p>ფოტო/ვიდეო</p>
        </div>
      </div>
      <button className="addBtn" onClick={handleButtonClick}>დამატება</button>
      <p className="postP">{displayedText}</p>
    </header>
  );
};
