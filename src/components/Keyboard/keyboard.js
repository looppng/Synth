import React, { useContext, useEffect } from "react";
import QwertyHancock from "qwerty-hancock";
import { CTX } from "../../context/Store";

const Keyboard = () => {
  const [appState, updateState] = useContext(CTX);

  useEffect(() => {
    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: "1000",
      height: "300",
      octaves: 3,
      startNote: "C4",
    });
    keyboard.keyDown = (note, freq) => {
      updateState({ type: "MAKE_OSC", payload: { note, freq } });
    };
    keyboard.keyUp = (note, freq) => {
      updateState({ type: "KILL_OSC", payload: { note, freq } });
    };
  }, []);

  return (
    <div>
      <div id="keyboard"></div>
    </div>
  );
};

export default Keyboard;
