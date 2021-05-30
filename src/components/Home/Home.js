import React from 'react';
import '../../App.css';
import './Home.css';
import background from '../../res/home-background.png';
import img from '../../res/home-img.png';
import imgAlt from '../../res/home-img-alt.png';

const Home = () => {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`}} className='home content column'>
            <h1 className='home__h1'>Pokemon TCG Wiki</h1>

            <h2 className='home__h2'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h2>

            <div className='home__row row'>
                <img src={img} alt='gengar' className='home__img'/>

                <img src={imgAlt} alt='gengarAlt' className='home__img'/>
            </div>
        </div>
    )
}

export default Home;