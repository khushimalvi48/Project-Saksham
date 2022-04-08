import React from "react";
import {useNavigate} from "react-router-dom";
// import Payment from '../Payments/Payment';
import './Card.css'

const Card = (props) => {
    const navigate=useNavigate();
    const CheckOut=()=>{
        navigate(`/checkout/${props.productImage}/${props.productName}/${props.productMadeBy}/${props.productPrice}`);
    }
    return (
        <>
        <div className="Cardback" >   
            <div className="cardMain"  style={{ width: "18rem", margin:"2rem" }}>
                <img src={props.productImage} className="card-img-top" alt="..." style={{height:"350px"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text description1" id="xyz">{props.productDescription}</p>
                    <a href={props.productMadeBy} className="card-text madeby" id="789">{props.productMadeBy}</a> 
                    <p className="card-text price" id="456">{props.productPrice}</p>
                    <button className="BuyNow" onClick={CheckOut}>Buy Now</button>                       
                    {/* <NavLink  to='/payment' className="payment"  >{<Payment />}</NavLink> */}
                    
                </div>
            </div>
        </div>
            
        
        </>
    )
}

export default Card;