import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/pages/About';
import UserContext from './context/userContext';
import './App.css';
import Community from './components/pages/Community/Community';
import Join from './components/pages/Join/Join';
import Product from './components/pages/Product';
import Checkout from './components/pages/Checkout';
import Payment from "./components/Payments/Payment";
import Donate from './components/Payments/Donate';
import PersonDetail from './components/pages/Community/PersonDetail';

function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/community" element={<Community />} />
          <Route path='/payment' element={<Payment/>}/>
          <Route path="/join" element={<Join/>} />
          <Route exact="true" path='/explore' element={<Product />} />
          <Route exact="true" path='/donate' element={<Donate />} />
          <Route exact="true" path='/persondetail/:name/:heading/:para1/:phone' element={<PersonDetail/>}/>
<Route path='/checkout/:pname/:psname/:price' element={<Checkout/>}/>
          
        </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
