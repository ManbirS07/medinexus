import React, { useState } from 'react';
import doctorsImage from '../assets/images/doctors.svg';


const MainSection = () => {
    
  const [citySearch, setCitySearch] = useState('');
  const [searchType, setSearchType] = useState('city'); 
  const [searchTerm, setSearchTerm] = useState('');

  const handleDocSearch = (e) => {
    e.preventDefault();
  };

  const handleHospitalSearch = (e) => {
    e.preventDefault();
    console.log('Searching hospital in:', citySearch);
  };

  return (
    <section className="main-content bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content mt-5" id="pills-tabContent">
              <div 
                className="tab-pane fade show active" 
                id="pills-search-doctor" 
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h3 className="mb-4">Get appointments for Doctor</h3>
                    <form onSubmit={handleDocSearch} className="search-form">
                     
                      <div className="mb-4">
                        <label className="form-label">Select City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter city name"
                          value={citySearch}
                          onChange={(e) => setCitySearch(e.target.value)}
                          required
                        />
                      </div>

                      
                      <div className="mb-4">
                        <label className="form-label">Search By</label>
                        <div className="d-flex gap-3">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="searchType"
                              id="searchByCity"
                              checked={searchType === 'city'}
                              onChange={() => setSearchType('city')}
                            />
                            <label className="form-check-label" htmlFor="searchByCity">
                              City
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="searchType"
                              id="searchByDisease"
                              checked={searchType === 'disease'}
                              onChange={() => setSearchType('disease')}
                            />
                            <label className="form-check-label" htmlFor="searchByDisease">
                              Disease
                            </label>
                          </div>
                        </div>
                      </div>

                    
                      <div className="mb-4">
                        <label className="form-label">
                          {searchType === 'city' ? 'Search Doctor' : 'Search Disease'}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={searchType === 'city' ? 
                            "Enter doctor's name" : 
                            "Enter disease name"
                          }
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          required
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="btn btn-primary w-100"
                      >
                        Search Doctor
                      </button>
                    </form>
                  </div>
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <img 
                      src={doctorsImage} 
                      alt="Find Doctors" 
                      className="img-fluid mt-4 mt-lg-0" 
                      style={{ maxWidth: '80%' }}
                    />
                  </div>
                </div>
              </div>
              <div 
                className="tab-pane fade" 
                id="pills-search-hospital" 
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h3 className="mb-4">Find Hospitals Near You</h3>
                    <form onSubmit={handleHospitalSearch} className="search-form">
                      <div className="mb-4">
                        <label className="form-label">Select City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter city name"
                          value={citySearch}
                          onChange={(e) => setCitySearch(e.target.value)}
                          required
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100"
                      >
                        Search Hospital
                      </button>
                    </form>
                  </div>
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;