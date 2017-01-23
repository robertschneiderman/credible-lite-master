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
            <Link to="/" className="navbar-logo">Credible LITE</Link>
            <ul className="navbar-nav">
                <li className="navbar-item" key={1}>
                    <Link className="nav-link" to="/new-submission">New Submission</Link>
                </li>
                <li className="navbar-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
        );
    }
}

export default Header;