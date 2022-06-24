import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const Home = () => {
  const [list, setList] = useState([]);

  const loadData = async () => {
    await axios
      .get("http://localhost:4000/employees")
      .then((response) => setList(response.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleClick = (id) => {
    if (window.confirm("Are you sure you wanna delete")) {
      axios.delete(`http://localhost:4000/delete/${id}`);
      console.log("deleted");
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <div className="home">
      <header>
        <h2>Contact</h2>
        <Link to="/add">
          <AiOutlinePlus className="add__button" />
        </Link>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>country</th>
            <th>position</th>
            <th>wage</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.name} </td>
                <td>{val.age} </td>
                <td>{val.country} </td>
                <td>{val.position} </td>
                <td>{val.wage} </td>
                <td className="action">
                  <Link to="/edit">
                    <FaRegEdit className="action__button edit" />
                  </Link>
                  <Link to="#">
                    <AiFillDelete
                      className="action__button delete"
                      onClick={() => handleClick(val.id)}
                    />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
