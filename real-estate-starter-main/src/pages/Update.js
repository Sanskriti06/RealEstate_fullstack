import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './styles.css'

const Update = () => {
  const [house, setHouse] = useState({
    address: "",
    location: "",
    type: "",
    price: null,
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const houseId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setHouse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();  

    try {
      await axios.put(`http://localhost:3001/houses/${houseId}`, house);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="joey">
      <div className='monica'>
      <h1 className="regst">Update the property</h1><br/>
      {/* <h1>Update the House</h1> */}
      <input
        type="text"
        placeholder="House address"
        name="address"
        className="name"
        onChange={handleChange}
      /><br/><br/>
      <input
        type="text"
        placeholder="House location"
        name="location"
        className="name"
        onChange={handleChange}
      /><br/><br/>
      <input
        type="type"
        placeholder="House type"
        name="type"
        className="name"
        onChange={handleChange}
      /><br/><br/>
      <input
        type="number"
        placeholder="House price"
        name="price"
        className="name"
        onChange={handleChange}
      /><br/><br/>
      <button className="buttoname"onClick={handleClick}>Update</button>
      {error && "Something went wrong!"} <br/> <br/>
      <Link to="/Houses" className="seeall">See all houses</Link>
    </div>
    </div>
  );
};

export default Update;