import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles.css'

const Add = () => {
  const [house, setHouse] = useState({
    address: "",
    location: "",
    type: "",
    price: null,
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHouse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:3001/houses", house);
      navigate("/Houses");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="joey">
      <div className='monica'>
      <h1 className="regst">Add new property</h1><br/>
      {/* <h1>Add New House</h1> */}
      <input
        type="text"
        placeholder="House address"
        className="name"
        name="address"
        onChange={handleChange}
      /> <br/><br/>
      <input
        type="text"
        placeholder="House location"
        className="name"
        name="location"
        onChange={handleChange}
      /> <br/><br/>
      <input
        type="type"
        placeholder="House type"
        className="name"
        name="type"
        onChange={handleChange}
      /> <br/><br/>
      <input
        type="number"
        placeholder="House price"
        className="name"
        name="price"
        onChange={handleChange}
      /> <br /><br/>
      <button className="buttoname" onClick={handleClick}>Add</button>
      {error && "Something went wrong!"} <br/> <br/>
      <Link to="/Houses" className="seeall">See all houses</Link>
    </div>
    </div>
  );
};

export default Add;