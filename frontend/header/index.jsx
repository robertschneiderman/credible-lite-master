import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <nav className="header">
            <Link to="/" className="navbar-logo">
                <img className="navbar-logo-svg" src="http://res.cloudinary.com/stellar-pixels/image/upload/v1485415981/logo-white_d1bqna.svg" />
                <span className="navbar-logo-text">Lite</span>
            </Link>
            <ul className="navbar-nav">
                <li className="navbar-item" key={1}>
                    <Link className="nav-link" to="/new-submission">New Submission</Link>
                </li>
                <li className="navbar-item" key={2}>
                    <Link className="nav-link" to="/offers">Offers</Link>
                </li>
            </ul>
        </nav>
        );
    }
}

export default Header;