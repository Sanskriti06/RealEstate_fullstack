import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import props from 'prop-types';
import {BrowserRouter, RouteProps, Routes, Route, Link} from "react-router-dom";
import './login.css'
// import l1 from './assets/a1.png'
//import Register from './Register'
//import Hello from './hello'
function Login(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const login = () => {
    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }
      else{
        setLoginStatus(response.data[0].email);
      }
    });
  };
    return(
        <div className='mainlogin'>
        {/* <img src={"https://media.istockphoto.com/id/1322575582/photo/exterior-view-of-modern-apartment-building-offering-luxury-rental-units-in-silicon-valley.jpg?b=1&s=170667a&w=0&k=20&c=0s6qL5cIMm6LSnryH40h5GmaM6jCi11kchWzsaTJGZE="} alt="Logo" className='imm'/> */}
        <div className='logn'>
        <h1 className="regst">Login</h1>  <br />
        <input type="email" required value = {email} placeholder="Enter Email" className="name"
        onChange = {(e) => {
          setEmail(e.target.value);
        }}/>
        <br/>
        <br/>
        <br />
        <input type="password" required value = {password} placeholder="Enter Password" className="name"
        onChange = {(e) => {
          setPassword(e.target.value);
        }}/>
        <br/><br/>
        <button className="buttoname" onClick={login}><Link to='/'>Login</Link></button>
        <br/><br/>
        {/* <Link to='/Register'><button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button></Link> */}
        {/* <button className="link-btn"><Link to='/Register' style={{ textDecoration: 'none', color:'white'}}>Don't have an account? Register here.</Link></button> */}
      </div>
      <h1>{loginStatus}</h1>
      
        </div>
    );
};
export default Login;