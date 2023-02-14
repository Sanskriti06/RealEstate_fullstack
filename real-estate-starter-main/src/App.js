import React from 'react';

//import routes and route
import { Routes,Route } from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About.js';
// import Contact from './Pages/Contact.js';
 import Login from './pages/Login.js';
 import Register from './pages/Register.js';
 import Houses from './pages/Houses.js';
 import Add from "./pages/Add.js";
 import Update from "./pages/Update.js";

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Houses' element={<Houses/>}/>
      <Route path="/add" element={<Add />} />
      <Route path="/Update/:id" element={<Update />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
    <Footer /> 
  </div>
  );
};

export default App;
