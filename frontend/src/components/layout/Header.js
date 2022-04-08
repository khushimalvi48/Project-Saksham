import React, { Component,useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import logo from '../pages/Images/logo.png';
import './Header.css';



class Header extends Component {
   
    render() { 
        
        return (     
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className = "container-fluid" >
                    <NavLink className="navbar-brand" to='/'><span className="logo"> <img src={logo}/> </span> SakSham</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/community">Community</NavLink>
                            </li>
                            <li>
                                <AuthOptions />
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            // <header className="header">
            //     <NavLink to="/"><h1 className="title">Sakshyam</h1></NavLink>
            //     <AuthOptions />
            // </header>
            

           
         //);
        )
    }
}
 
export default Header;