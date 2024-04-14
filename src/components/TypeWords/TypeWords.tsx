"use client";

import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

const splitter = new GraphemeSplitter();

function TypeWords() {
  return (
    <TypeAnimation
      splitter={(str) => splitter.splitGraphemes(str)}
      sequence={[
        "Hello, I am Gwang Jin Kim",
        1000,
        "Hello, I am from South Korea 🇰🇷",
        1000,
        "Hello, I am a Software Developer",
        1000,
      ]}
      wrapper="span"
      repeat={Infinity}
      className="text-3xl lg:text-7xl"
    />
  );
}

export default TypeWords;
