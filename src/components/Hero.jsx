import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 text-light mt-4">
            <h1>MediNexus</h1>
            <p className="hero-description">
            Taking charge of your health has never been easier! At MediNexus, we bring together the power of technology and healthcare to help you make informed decisions about your well-being.
            </p>
          </div>
          <div className="col-12">


            <div className="feture-bar mt-0 mt-md-5 mt-lg-4 mt-xxl-5"
            style={{ backgroundColor: '#fff0f3' }}>
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button 
                    className="nav-link text-custom-white active" 
                    id="pills-search-doctor-tab"
                    data-bs-toggle="pill" 
                    data-bs-target="#pills-search-doctor" 
                    type="button" 
                    role="tab"
                    aria-controls="pills-search-doctor" 
                    aria-selected="true"
                  >
                    Search Doctor
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className="nav-link text-custom-white" 
                    id="pills-search-hospital-tab"
                    data-bs-toggle="pill" 
                    data-bs-target="#pills-search-hospital" 
                    type="button" 
                    role="tab"
                    aria-controls="pills-search-hospital" 
                    aria-selected="false"
                  >
                    Search Hospital
                  </button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-custom-white" to="/doctor-list">
                    Doctor List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-custom-white" to="/hospital-list">
                    Hospital list
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;