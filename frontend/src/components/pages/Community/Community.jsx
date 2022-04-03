import React from 'react';
import { NavLink } from 'react-router-dom';
import './Community.css';
import communityMemebers from './dataCommunity';
import Card from './Card';
import Footer from '../Footer/Footer';
const Community = () => {
    return (
        <>
            <div className="heading-top">
                <h1 className="h1">Some of our Change Makers</h1>
                <div className="button">
                        <NavLink className="but" exact to="/join">Join Saksham</NavLink>
                </div>
            </div>
            <div className="row main_Card" style={{ width: "95rem" }}>
                        {communityMemebers.map((val) => {
                            return (
                                <Card
                                    key={val.id}
                                    image={val.image}
                                    name={val.name}
                                    heading={val.heading}
                                    para1={val.para1}
                                        // productMadeBy={val.madeBy}
                                />
                            )
                        })}
            </div> 
            <Footer/>
        </>
    )
}

export default Community;