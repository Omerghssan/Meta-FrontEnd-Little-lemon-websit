import React from "react";
import {link} from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'
const Header = () => {
    return (
        <div>
            <header className="header">
                <section>
                    <div className="banner">
                        <h2>Little Lemon</h2>
                        <h3>NewYork</h3>
                        <p> We are a family owned Mediterraneran restaurant , focused on traditional recipes servred 
                            with a modern twist.
                        </p>
                        <link to ="/booking"><button>Reserve Table</button></link>
                    </div>
                    <div className="banner-img">
                        <img src="bannerImg" alt="" />
                    </div>
                </section>

            </header>
        </div>
    )
}

export default Header;