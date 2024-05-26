import React, { useState } from "react";
import ColorBox from "./component/ColorBox";
import "./App.css";

const getRandomColor = () => {
  const colors = ["blue", "red"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [gameover, setgameover] = useState(false);
  const [colorBoxes, setColorBoxes] = useState(
    Array.from({ length: 10 }, () => ({
      color: getRandomColor(),
      position: { x: 0, y: 0 },
    }))
  );

  const handleDragEnd = (index, position, color) => {
    const newColorBoxes = [...colorBoxes];
    newColorBoxes[index].position = position;

    setColorBoxes(newColorBoxes);

    if (color === "red") {
      setRed(red + 1);
    } else if (color === "blue") {
      setBlue(blue + 1);
    }

    checkWinCondition(newColorBoxes);
  };
  const checkWinCondition = (boxes) => {
    let redOnLeft = true;
    let blueOnRight = true;

    boxes.forEach((box) => {
      if (box.color === "red" && box.position.x >= window.innerWidth / 2) {
        redOnLeft = false;
      }
      if (box.color === "blue" && box.position.x <= window.innerWidth / 2) {
        blueOnRight = false;
      }
    });

    if (redOnLeft && blueOnRight) {
      setgameover(true);
      console.log("hello");
    }
  };

  return (
    <div className="main">
      <div className="container">
        {colorBoxes.map((box, index) => (
          <ColorBox
            key={index}
            color={box.color}
            onDragEnd={(position) => handleDragEnd(index, position, box.color)}
          />
        ))}
      </div>
      <h2>Red Score: {red}</h2>
      <h2>Blue Score: {blue}</h2>
      {gameover && red !== blue && (
        <h1>{red > blue ? "Red is Winner" : "Blue is Winner"}</h1>
      )}
    </div>
  );
};

export default App;
