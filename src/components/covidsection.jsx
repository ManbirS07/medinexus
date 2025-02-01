import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CovidSection = () => {
    const [dataa,setData]=useState({})
    useEffect(()=>
    {
        const getData=async(req,res)=>
        {
            try {
                const res=await fetch('https://api.rootnet.in/covid19-in/stats/latest')
                const data= await res.json()
                console.log(data.data.summary)
                console.log(data)
                setData(data.data.summary)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

  return (
    <section>
      <div className="container">
        <h2 className="text-center">COVID-19</h2>
        <p className="text-center">Coronavirus (COVID-19) Dashboard</p>
        <div>
          <p>Last Update: {new Date().toLocaleDateString()}</p>
          <p>
            Source: <a 
              className="text-decoration-none" 
              href="https://www.mygov.in/covid-19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mygov.in/covid-19/
            </a>
          </p>
        </div>
        <div className="row">
          <CovidStat 
            type="Indian Cases" 
            value={dataa.
                confirmedCasesIndian
                } 
            boxClass="box-blue" 
          />
          <CovidStat 
            type="Total" 
            value={dataa.total} 
            boxClass="box-pink" 
          />
          <CovidStat 
            type="Discharged" 
            value={dataa.discharged} 
            boxClass="box-green" 
          />
          <CovidStat 
            type="Deaths" 
            value={dataa.deaths} 
            boxClass="box-purple" 
          />
        </div>
      </div>
    </section>
  );
};

const CovidStat = ({ type, value, boxClass }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 mt-2">
      <div className="service-wrapper">
        <div className={`inner-box ${boxClass}`}>
          <span className="covid-num">{value}</span>
        </div>
        <h6 className="header">{type}</h6>
      </div>
    </div>
  );
};

export default CovidSection;