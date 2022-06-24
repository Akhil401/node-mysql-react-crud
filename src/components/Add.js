import React, { useState } from "react";
import axios from "axios";
import "./add.css";
import { Link } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState();

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/add", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => console.log("success"))
      .catch((err) => console.warn(err));
  };

  return (
    <div className="add">
      <Link to="/">
        {" "}
        <span>Contact</span>
      </Link>

      <form>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Age</span>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <span>Country</span>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <span>Position</span>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <span>Wage</span>
        <input
          type="number"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />
        <button type="submit" onClick={submitHandle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
