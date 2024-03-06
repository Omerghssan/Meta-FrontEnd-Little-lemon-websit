import React from "react";
import logo from '../imagers/logo.svg'
const Nav = () => {
    const [menuopen, setMenuopen] = useState(flalse);
    const toggleMenu = () => {
        setMenuoOpen(!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
           <a href='/' className="logo">
            <img src={logo} alt="logo"/>
           </a>

           <div className="men-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
           </div>

           <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Avout</a>
                </li>
                <li>
                    <a href="/">Servicess</a>
                </li>
                <li>
                    <a href="/">Mune</a>
                </li>
                <li>
                    <a href="/">Reservation</a>
                </li>
                <li>
                    <a href="/">Order online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            
           </ul>
        </nav>
    )  
}

export default Nav