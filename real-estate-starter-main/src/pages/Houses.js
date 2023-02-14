import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './styles.css'

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchAllHouses = async () => {
      try {
        const res = await axios.get("http://localhost:3001/houses");
        setHouses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllHouses();
  }, []);

  console.log(houses);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/houses/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
      <h1 className="h1joey">Newly Listed Houses/Apartments</h1>

      {/* <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new house
        </Link>
      </button>
      <br /> */}


      <div className="houses">
        {houses.map((house) => (
          <div key={house.id} className="house">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDcdlt2oAwhMxEqQ-wi4SKQ6oWd6XAk1xDg&usqp=CAU"} className="coverimg" alt="" />
            <h2>{house.address}</h2>
            <p>{house.location}</p>
            {/* <p>{house.type}</p> */}
            <span>${house.price}</span>
            <button className="delete" onClick={() => handleDelete(house.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${house.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

<br />
      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new house
        </Link>
      </button>
      </div>
    </div>
  );
};

export default Houses;