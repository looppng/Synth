import React, { useContext } from "react";
import style from "./Osc1.module.css";
import { CTX } from "../../context/Store";

const Oscillator1 = () => {
  const [appState, updateState] = useContext(CTX);

  const { type, detune } = appState.osc1Settings;

  const change = (e) => {
    let { id, value } = e.target;
    updateState({ type: "CHANGE_OSC1", payload: { id, value } });
  };

  const changeType = (e) => {
    let { id } = e.target;
    updateState({ type: "CHANGE_OSC1_TYPE", payload: { id } });
  };

  return (
    <section className={style.container}>
      <div className={`${style.row} row`}>
        <div className={style.header}>
          <h1 className={style.heading}>Oscillator 1</h1>
        </div>
        <div className="col-5">
          <div className={style.slider}>
            <label htmlFor="detune" className={style.label}>
              Detune
            </label>
            <input
              value={detune}
              onChange={change}
              type="range"
              id="detune"
              className={style.input}
            />
          </div>
        </div>
        <div className="col-5">
          <h3 className={style.label}>Wave</h3>
          <div className={style.actions}>
            <button
              id="sine"
              onClick={changeType}
              className={` ${type === "sine" && `${style.active}`}`}
            >
              Sine
            </button>
            <button
              id="triangle"
              onClick={changeType}
              className={`${type === "triangle" && `${style.active}`}`}
            >
              Triangle
            </button>
            <button
              id="square"
              onClick={changeType}
              className={`${type === "square" && `${style.active}`}`}
            >
              Square
            </button>
            <button
              id="sawtooth"
              onClick={changeType}
              className={`${type === "sawtooth" && `${style.active}`}`}
            >
              Sawtooth
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oscillator1;
