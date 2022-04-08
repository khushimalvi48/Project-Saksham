import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card1.css';

const Card = (props) => {
    return (
        <>
            <div className="card col-lg-5 mb-5 shadow  memberSect">
                <div className="row ">
                    <div className="img">
                        <img src={props.image} className="card-img-top img_sect2" alt="..." />
                    </div>
                    <div className="row mainCard">
                        <div className="card-body">
                        <h5 className="card-title name">{props.name}</h5>
                        <p className="card-text text">{props.heading}</p>
                            <p className="card-text text">{props.para1}</p>
                        {/* <NavLink to="/" class="btn btn-primary">Buy Now</NavLink> */}
                        {/* <NavLink to='/payment' >{<Payment />}</NavLink> */}
                    
                        </div>
                    </div>
                </div>
                </div>
            
        </>
    )
}
export default Card;