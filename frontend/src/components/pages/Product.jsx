import React from "react";
import Card from './Card';
import Sdata from '../Sdata';
import './Card.css';
import Footer from './Footer/Footer';

const Explore = () => {
    return (
        <>
        
            <div className="container-fluid card">
                <h2>Our Exclusive Products</h2>
                
                <div className="row inner">
                    <div className="col">
                        {Sdata.map((val) => {
                            return (
                                <Card
                                    key={val.id}
                                    productImage={val.productImage}
                                    productName={val.productName}
                                    productDescription={val.productDescription}
                                    productPrice={val.productPrice}
                                        productMadeBy={val.madeBy}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Explore;