import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Shop from './Shop';
import CPU from './pages/CPU';
import GPU from './pages/GPU';
import Motherboard from './pages/Motherboard';
import Case from './pages/Case';
import RAM from './pages/RAM';
import SSD from './pages/SSD';
import Cart from './Cart';
import Contact from './Contact';
import Signup from './Signup'
import Login from './Login'
import '../styles/App.css'



function App() {
  
    return (
        <Router>
            <div className="App">
            <Header />
                <div className='pages'>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path='/Contact' element={<Contact/>}/>
                        <Route path='/Signup' element={<Signup/>}/>
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='/Cart' element={<Cart />}/>
                        <Route path="/CPU" element={<CPU />} />
                        <Route path="/GPU" element={<GPU />} />
                        <Route path="/Motherboard" element={<Motherboard />} />
                        <Route path="/Case" element={<Case />} />
                        <Route path="/RAM" element={<RAM />} />
                        <Route path="/SSD" element={<SSD />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
  );
}

export default App;
