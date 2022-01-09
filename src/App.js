import React, { useState, useRef } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const pin1 = useRef(null);
  const pin2 = useRef(null);
  const pin3 = useRef(null);
  const pin4 = useRef(null);

  const [number, setNumber] = useState([]);
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState([]);
  const [cvv, setCvv] = useState("");

  const [cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === "cvv"
      ? setCvv(value)
      : name === "name"
      ? setName(value)
      : name === "number"
      ? setNumber([...number, value])
      : setExpiry([...expiry, value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([
      ...cards,
      {
        NUM: number.filter((el) => el.length === 4).join(" "),
        NAME: name,
        EXP: expiry.join("/"),
        CVV: cvv,
      },
    ]);
    setExpiry([]);
    setNumber([]);
  };

  const handleDel = (e) => {
    setCards(cards.splice(e, 1));
  };

  return (
    <div className="App">
      <h1>Add New Card</h1>
      <form onSubmit={handleSubmit}>
        <p>Card Number*</p>
        <div name="number">
          <input
            ref={pin1}
            type="tel"
            name="number"
            maxLength="4"
            onChange={(e) => {
              handleInputChange(e);
              if (e.target.value.length === 4) {
                pin2.current.focus();
              }
            }}
          />
          <input
            ref={pin2}
            type="tel"
            name="number"
            maxLength="4"
            onChange={(e) => {
              handleInputChange(e);
              if (e.target.value.length === 4) {
                pin3.current.focus();
              }
              if (e.target.value.length < 1) {
                pin1.current.focus();
              }
            }}
          />
          <input
            ref={pin3}
            type="tel"
            name="number"
            maxLength="4"
            onChange={(e) => {
              handleInputChange(e);
              if (e.target.value.length === 4) {
                pin4.current.focus();
              }
              if (e.target.value.length < 1) {
                pin2.current.focus();
              }
            }}
          />
          <input
            ref={pin4}
            type="tel"
            name="number"
            maxLength="4"
            onChange={(e) => {
              handleInputChange(e);
              if (e.target.value.length === 4) {
              }
              if (e.target.value.length < 1) {
                pin3.current.focus();
              }
            }}
          />
        </div>
        <input
          type="tel"
          name="name"
          placeholder="Name on Card"
          onChange={(e) => handleInputChange(e)}
        />
        <div>
          <p>Expiry MM/YY</p>
          <select
            type="tel"
            name="expiry"
            maxLength="5"
            placeholder="MM/YY Expiry"
            onChange={(e) => handleInputChange(e)}
          >
            {new Array(12).fill(0).map((e, i) => {
              return <option key={i}>{i + 1}</option>;
            })}
          </select>
          <select
            type="tel"
            name="expiry"
            maxLength="5"
            placeholder="MM/YY Expiry"
            onChange={(e) => handleInputChange(e)}
          >
            {new Array(30).fill(0).map((e, i) => {
              return <option key={i}>{i + 22}</option>;
            })}
          </select>
        </div>
        <input
          type="tel"
          name="cvv"
          placeholder="CVV"
          maxLength="3"
          onChange={(e) => handleInputChange(e)}
        />
        <input type="submit" value="Add this card" />
      </form>

      <h3>Available Cards</h3>
      {cards.map((card, i) => {
        return <Card key={i} props={card} handleDel={handleDel}></Card>;
      })}
    </div>
  );
}

export default App;
