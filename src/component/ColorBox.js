import React from "react";
import { motion } from "framer-motion";
import "./ColorBox.css";

const ColorBox = ({ color, onDragEnd }) => {
  return (
    <motion.div
      className="color-box"
      style={{ backgroundColor: color }}
      drag
      onDragEnd={(event, info) => onDragEnd(info.point)}
      dragConstraints={{
        left: -window.innerWidth / 2,
        right: window.innerWidth / 2,
        top: -window.innerHeight / 2,
        bottom: window.innerHeight / 2,
      }}
    ></motion.div>
  );
};

export default ColorBox;
