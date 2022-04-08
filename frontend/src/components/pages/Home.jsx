import React, { useEffect, useContext } from 'react';
import { useNavigate,NavLink} from 'react-router-dom';
import UserContext from '../../context/userContext';
import './Home.css';
import image1 from './Images/image.png';
// import image1 from './Images/image1.png';
import ww2 from './Images/home1.png';
import ww3 from './Images/home2.png';
import Footer from './Footer/Footer';

const Home = () => {
    const {userData} = useContext(UserContext);
    const history = useNavigate();

    useEffect(() => {
        if(!userData.user)
            history("/");

    }, []);
    return (
            <>
        <div className="home">
             {/*{userData.user ? (
                <h1>Welcome {userData.user.displayName}</h1>
            ) : (
                <>
                    <h2>You are not logged in</h2>
                </>
            )} */}
                <div className="homeImg">
                    <img src={image1} alt="img" />
                </div>
                <div className="right">
                <h1>Welcome to Saksham</h1>
                <div id="carouselExampleControls" class="carousel slide carouselMain" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active carouselImg">
                            <img class="d-block w-100" src={ww2} alt="First slide" />
                        </div>
                        <div class="carousel-item carouselImg">
                            <img class="d-block w-100" src={ww3} alt="Second slide" />
                        </div>
                        <div class="carousel-item carouselImg">
                            <img class="d-block w-100" src="http://www.mysticindiatour.com/wp-content/uploads/2013/12/Maharashtra-Arts-Crafts.jpg" alt="Third slide" />
                        </div>
                    </div>
                </div>
                </div>
        </div>
        <Footer/>
        </>


    )

}

export default Home;