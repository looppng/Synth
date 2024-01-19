import React, { useContext } from "react";
import style from "./Filter.module.css";
import { CTX } from "../../context/Store";
const Filter = () => {
  const [appState, updatedState] = useContext(CTX);

  const { frequency, detune, Q, gain, type } = appState.filterSettings;

  const change = (e) => {
    let { id, value } = e.target;
    updatedState({ type: "CHANGE_FILTER", payload: { id, value } });
  };

  const changeType = (e) => {
    let { id } = e.target;
    updatedState({ type: "CHANGE_FILTER_TYPE", payload: { id } });
  };

  return (
    <section className={style.container}>
      <div className={`${style.row} row`}>
        <div className={style.header}>
          <h1 className={style.heading}>Filter</h1>
        </div>
        <div className="col-5">
          <div className={style.slider}>
            <label className={style.label}>Frequency</label>
            <input
              value={frequency}
              type="range"
              onChange={change}
              id="frequency"
              max="10000"
              className={style.input}
            />
          </div>
          <div className={style.slider}>
            <label className={style.label}>Detune</label>
            <input
              value={detune}
              type="range"
              onChange={change}
              id="detune"
              className={style.input}
            />
          </div>
          <div className={style.slider}>
            <label className={style.label}>Q</label>
            <input
              value={Q}
              type="range"
              onChange={change}
              id="Q"
              max="10"
              step="0.1"
              className={style.input}
            />
          </div>
          <div className={style.slider}>
            <label className={style.label}>Gain</label>
            <input
              value={gain}
              type="range"
              onChange={change}
              id="gain"
              max="10"
              step="0.1"
              className={style.input}
            />
          </div>
        </div>
        <div className="col-5">
          <div className="param">
            <h3 className={style.label}>Type</h3>
            <button
              onClick={changeType}
              id="lowpass"
              className={`${type === "lowpass" && `${style.active}`}`}
            >
              Lowpass
            </button>
            <button
              onClick={changeType}
              id="highpass"
              className={`${type === "highpass" && `${style.active}`}`}
            >
              Highpass
            </button>
            <button
              onClick={changeType}
              id="notch"
              className={`${type === "notch" && `${style.active}`}`}
            >
              Notch
            </button>
            <button
              onClick={changeType}
              id="lowshelf"
              className={`${type === "lowshelf" && `${style.active}`}`}
            >
              Lowshelf
            </button>
            <button
              onClick={changeType}
              id="highshelf"
              className={`${type === "highshelf" && `${style.active}`}`}
            >
              Highshelf
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
