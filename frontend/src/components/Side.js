import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';

const Side = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios
            .post('http://localhost:3000/logout')
            .then((res) => {
                if (res.data === 'Logout successful') {
                    navigate('/');
                    alert('Logout successful');
                } else {
                    alert('Logout failed');
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <a href="#" className="nav-link">
                        <div className="nav-profile-image">
                            <img src="/assets/images/faces/face28.png" alt="profile" />
                            <span className="login-status online"></span>
                        </div>
                        <div className="nav-profile-text d-flex flex-column">
                            <span className="font-weight-bold mb-2">C-O-D-E-X</span>
                        </div>
                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">
                        <span className="menu-title">Home</span>
                        <i className="mdi mdi-home menu-icon"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home/candidates">
                        <span className="menu-title">Candidates</span>
                        <i className="mdi mdi-home menu-icon"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home/vote">
                        <span className="menu-title"> Cast Vote</span>
                        <i className="mdi mdi-home menu-icon"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home/winner">
                        <span className="menu-title">Vote Count</span>
                        <i className="mdi mdi-home menu-icon"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <div className="d-flex justify-content-end p-2">
                        <button onClick={handleLogout} className="btn btn-danger btn-sm">
                            <FaSignOutAlt className="mr-1" />
                            Logout
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Side;
