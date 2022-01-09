import React from "react";
import Styles from "./Card.module.css";
function Card({ props, key, handleDel }) {
  const { NAME, CVV, EXP, NUM } = props;
  return (
    <div className={Styles.container}>
      <div className={Styles.box1}>
        <div>{NAME}</div>
        <div>{NUM}</div>
      </div>
      <div className={Styles.box2}>
        <div>{EXP}</div>
        <div>{CVV}</div>
      </div>
      <div>
        <div>
          <img
            alt="del"
            src="https://cdn2.iconfinder.com/data/icons/duo-toolbar-signs/512/trash-512.png"
            onClick={() => handleDel(key)}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
