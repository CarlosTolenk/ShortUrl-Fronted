import React from 'react';
import {Link } from "react-router-dom";

//Assets
import '../../App.css';

const Navbar = (props) => {
    return(
        <div>
            
            <nav className="nav-extended">
                <div className="nav-wrapper container">
                    <Link to="/" className="logo-name">Carlos Tolentino</Link>
                          
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://www.linkedin.com/in/ctolenk/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/CarlosTolenk" target="_blank">Github</a></li>
                        {/* <li><a href="https://ctolenk.com" target="_blank">Website(alpha)</a></li> */}
                    </ul>
                </div>
                <div className="nav-content container">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link to="/">Dashboard</Link></li>
                        <li className="tab"><Link to="/shorturl">Your Short URL</Link></li>                       
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="https://www.linkedin.com/in/ctolenk/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/CarlosTolenk" target="_blank">Github</a></li>
                {/* <li><a href="https://ctolenk.com" target="_blank">Website(alpha)</a></li> */}
            </ul>
        </div>
  
    )
}

export default Navbar;


