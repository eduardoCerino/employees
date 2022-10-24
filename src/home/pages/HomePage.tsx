import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">

    <div className="container m-3">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Employees website</h1>
          <h4 data-aos="fade-up" className='mb-4' data-aos-delay="400"> Made by <span className='text-primary'>Eduardo cerino</span></h4>
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="text-center text-lg-start">
              <Link to="/login" className="btn btn-primary scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
          <img src="../../../job.png" className="img-fluid" alt=""/>
        </div>
      </div>
    </div>

  </section>
  
     )
}

export default HomePage