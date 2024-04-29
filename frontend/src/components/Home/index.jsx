import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/logo.jpg';
import heroImage from './images/hero.jpg';
import boatImage from './images/boatrentals.jpg';
import kayakImage from './images/kayakrentals.jpg';
import paddleBoardImage from './images/paddleboardrentals.jpg';

import './homepage.css';

const Home = () => {

    return (
        <div className="homepage">
            <header className="navbar">
                <img src={logoImage} alt="Nauti Jane's Boat Rentals" className="logo" />
                <nav className="nav-links">
                    <a href="/aboutus">ABOUT US</a>
                    <a href="/contact">CONTACT US</a>
                    <Link to="/login">Login/Sign In</Link>

                </nav>
            </header>
            <section className="hero">
                <img src={heroImage} alt="Boat on Water" className="hero-image" />
                <div className="hero-text">
                    <h1>RENTALS IN YOUR BACKYARD</h1>
                    <Link to="/booking"><button className="cta-button"><h1>BOOK NOW</h1></button></Link>
                </div>
            </section>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={boatImage} alt="Boat Rentals" />
                    <h2>Boat Rentals</h2>
                    <p>Spend a day on the water with one of our Wellcraft boats. Perfect for fishing or a day in the sun with the family. Captains available for hire.</p>
                </div>
                <div className="gallery-item">
                    <img src={kayakImage} alt="Kayak Rentals" />
                    <h2>Kayak Rentals</h2>
                    <p>Explore the waters with our kayaks. Available for all skill levels and water adventures.</p>
                </div>
                <div className="gallery-item">
                    <img src={paddleBoardImage} alt="Paddle Board Rentals" />
                    <h2>Paddle Board Rentals</h2>
                    <p>Enjoy the serenity of the water on our paddleboards. Great for all ages and perfect for a group adventure or a solo outing.</p>
                </div>
            </div>
        </div>
    )
};

export default Home;