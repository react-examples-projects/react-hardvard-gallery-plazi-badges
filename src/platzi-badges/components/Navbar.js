import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//files
import Logo from '../images/logo.svg';

//css
import '../styles/Navbar.css';

class Navbar extends Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/" className="Navbar__brand">
                        <img src={Logo} alt="Logo" className="Navbar__brand-logo"/>
                        <span className="font-weight-light mr-1">Platzi</span> 
                        <span className="font-weight-bold">Conference</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;