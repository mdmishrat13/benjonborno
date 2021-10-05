import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="bg-warning py-4">
            <div className="container">
                <div className="row ">
                    <div className="col-2">
                        <Link to="/home">Home</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/courses">Course</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/testemonial">Testemonial</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/about">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;