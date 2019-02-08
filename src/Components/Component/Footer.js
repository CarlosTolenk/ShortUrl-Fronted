import React from 'react';

//Assets
import '../../App.css';

const Footer = (props) => {
    return(  
     
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">This is an application to be able to visualize the most popular websites and to be able to shorten url.</p>
              </div>  
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright CTolenk           
            </div>
          </div>
        </footer>
    )
}

export default Footer;


