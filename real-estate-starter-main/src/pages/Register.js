import React, {useState, useEffect} from 'react'
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import Axios from 'axios'
import props from 'prop-types';
//import logo from '../assets/logo.svg'
import './Register.css'
//import Login from './Login'
function Register(props){
    const [UsernameReg, setUsernameReg] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [PasswordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post('http://localhost:3001/register', {
          username: UsernameReg,
          email: EmailReg,
          password: PasswordReg,
        }).then((response) => {
          console.log(response);
        });
      };
    return(
        <div className='mainnn'>
        {/* <img src={"https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.jpg?b=1&s=170667a&w=0&k=20&c=9cnDfc9tNIAcgvuGHZkST7CP-dFaNXutX8OpzVO1jEA="} className="imm" alt="Logo" /> */}
        <div className='registrstion'>
        <h1 className="regst">Registration</h1>
        <br/>
        {/* <label>Username</label> */}
        <br/>
        <input type="text" placeholder="Enter Username" className="name"
        onChange = {(e) => {
          setUsernameReg(e.target.value);
        }} />
        <br/><br/>
        {/* <label>Email</label> */}
        <br/>
        <input type="email" placeholder="Enter Email" className="name"
        onChange = {(e) => {
          setEmailReg(e.target.value);
        }} />
        <br/><br/>
        {/* <label>Password</label> */}
        <br/>
        <input type="password" placeholder="Enter Password" className="name"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }} />
        <br/><br/><br />
        <button onClick={register} className="buttoname"><Link to='/' >Register</Link></button> <br/><br/>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        {/* <button className="link-btn"><Link to='/' style={{ textDecoration: 'none', color:'white'}}>Already have an account? Login here.</Link></button> */}
      </div>
      </div>
    );
};
export default Register;