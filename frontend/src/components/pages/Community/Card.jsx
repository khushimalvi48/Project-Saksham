import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const navigate=useNavigate();
    const detail=()=>{
        navigate(`/persondetail/${props.name}/${props.heading}/${props.para1}/${props.para2}/${props.phone}`);
    }
    return (
        <>
            <div className="card col-lg-5 mb-5 shadow memberSect">
                <div className="row">
                    <div className="img">
                        <img src={props.image} className="card-img-top img_sect2" alt="..." />
                    </div>
                    <div className="row mainCard">
                        <div className="card-body">
                        <h5 className="card-title name">{props.name}</h5>
                        <p className="card-text text">{props.heading}</p>
                            <p className="card-text text">{props.para1}</p>
                        <button onClick={detail} class="btn btn-primary">More</button>
                        {/* <NavLink to='/payment' >{<Payment />}</NavLink> */}
                    
                        </div>
                    </div>
                </div>
                </div>
            
        </>
    )
}
export default Card;