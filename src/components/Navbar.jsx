import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import userImg from '../assets/images/user.png';

const Navbar = () => {
  return (
    <div className="navbar-shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="MediNexus" width="65%" height="auto" />
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
                
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-0 mx-auto d-flex flex-row gap-4">
                <li className="nav-item">
                  <Link className="nav-link small" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/heart-checkup">Routine Checkups</Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link" to="/covid">
                    <span className="text-danger">Emergency</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Med-Tests</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Campaigns</Link>
                </li>
              </ul>

              <div className="d-flex flex-row align-items-center btn-group">
                <UserDropdown />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const UserDropdown = () => {
  return (
    <>
      <button 
        type="button" 
        className="btn dropdown-toggle" 
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img className="user-img" src={userImg} alt="user" />
        <span className="user-first-name">User</span>
      </button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button 
            type="button" 
            className="btn dropdown-item" 
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Log Out
          </button>
        </li>
      </ul>
      <LogoutModal />
    </>
  );
};

const LogoutModal = () => {
  return (
    <div 
      className="modal fade" 
      id="staticBackdrop" 
      data-bs-backdrop="static"
      data-bs-keyboard="false" 
      tabIndex="-1" 
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      {/* Modal content */}
    </div>
  );
};

export default Navbar;