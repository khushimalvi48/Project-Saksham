import React from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
// import lady4 from './images/lady 4.jpg';
// import p1 from './images/p1.jpg';
// import p3 from './images/p3.jpg';
// import p4 from './images/p4.jpg';
// import p5 from './images/p5.jpg';
// import p6 from './images/p6.jpg';
import "./PersonDetail.css";

const PersonDetail = () => {

        const { name, heading, para1, para2, phone } = useParams();
  
    return(
        <>
        <div className="productMain">
            <div className="para">
            <p>"I am a Mithila Painter From Madhubani, Bihar, India and my speciality is Mithila Painting and I make made posters and mithila painted sarees for weddings and occasions." <br />
            I am 32 years old and a part of Saksham since 4 years.In Bihar Mithila painting posters are one of the major part of wedding occasions .My products are been sold outside india too. PrimeMiniter Narendra Modi himself has praised the maithili artculture and has encouraged many other ladies. <br />
             Support of our customers have encouraged us to work on this mission to make Saksham an identity for all those ladies who have talents but havent got the platform to showcase it.It will be our heartiest request to share this website so that we can reach all women over india. <br /> <br />
                        phone: {phone} </p>
            </div>
            <div className="prd">
            <img src="" alt ="img"/>
            <h4>{name}</h4>    
            </div>
        </div>
            <div className="ino">
                <div className="ab">
            <img src="" alt ="img"/>
            <img src =""
            alt ="img"/>
            <img src ="" 
            alt ="img"/>
            <img src ="" 
            alt ="img"/>
            <img src ="" 
            alt ="img"/> 
            </div>  
            </div>
            <Footer/>
        </>
    )
}

export default PersonDetail;