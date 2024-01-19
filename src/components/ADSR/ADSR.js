import React, { useContext } from "react";
import { CTX } from "../../context/Store";
import style from "./ADSR.module.css";

const ADSR = () => {
  const [appState, updateState] = useContext(CTX);
  let { attack, decay, sustain, release } = appState.envelope;
  const change = (e) => {
    let { id, value } = e.target;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
  };

  return (
    <section className={style.container}>
      <div className={`${style.row} row`}>
        <div className="col-4">
          <div className={style.header}>
            <h2 className={style.heading}>ADSR</h2>
            <img
              src="https://yt3.googleusercontent.com/ytc/AIf8zZSb9D-qdeBae206OSSLvgA6I6V7u7ruDdWdjuIiEA=s900-c-k-c0x00ffffff-no-rj"
              alt="adsr image"
              width={300}
              height={150}
            />
          </div>
        </div>
        <div className="col-4">
          <div className={style.slider}>
            <label className={style.label}>Attack</label>
            <input
              value={attack}
              type="range"
              id="attack"
              onChange={change}
              max="2"
              step="0.02"
              className={style.input}
            />
          </div>
          <div className={style.slider}>
            <label className={style.label}>Decay</label>
            <input
              value={decay}
              type="range"
              id="decay"
              onChange={change}
              max="1"
              step="0.01"
              className={style.input}
            />
          </div>
        </div>
        <div className="col-4">
          <div className={style.slider}>
            <label className={style.label}>Sustain</label>
            <input
              value={sustain}
              type="range"
              id="sustain"
              onChange={change}
              max="1"
              step="0.01"
              className={style.input}
            />
          </div>
          <div className={style.slider}>
            <label className={style.label}>Release</label>
            <input
              value={release}
              type="range"
              id="release"
              onChange={change}
              max="2"
              step="0.02"
              className={style.input}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ADSR;
