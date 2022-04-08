import React from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import p1 from '../Images/7.png';
import p2 from '../Images/3.png';
import p3 from '../Images/4.jpg';
import p4 from '../Images/2.jpg';
import p5 from '../Images/6.jpg';
import "./PersonDetail.css";

const PersonDetail = () => {

        const { name, heading, para1,phone} = useParams();
  
    return(
        <>
        <div className="productMain">
            <div className="para">
            <p>{heading}<br /><br/>
                        {para1} <br />
                        <br /> <br />
                        <b> Phone: {phone} </b>
        </p>
            </div>
            <div className="prd">
            <img src="https://t.ly/oNVr" alt ="img"/>
                    <h4>{ name}</h4>    
            </div>
        </div>
            <div className="ino">
                <h2 style={{textAlign:"center"}}>My Products</h2>
                <div className="ab">
            <img src={p1} alt ="img"/>
            <img src ={p2}
            alt ="img"/>
            <img src ={p3}
            alt ="img"/>
            <img src ={p4}
            alt ="img"/>
            <img src ={p5}
            alt ="img"/> 
            </div>  
            </div>
            <Footer/>
        </>
    )
}

export default PersonDetail;