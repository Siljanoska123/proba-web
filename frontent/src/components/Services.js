import React from "react";
import '../css-components/services.css'

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Through a profound analysis, SGI helps you identify, analyze, assess,
          </p>
          <p>
            and appropriately AWARD your organization in the following areas:
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-xs-6 col-md-32'>
                {' '}
                <i className={d.icon}></i>
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p className="service-text">{d.text}</p>
                </div>
              </div>
            ))
            : 'loading'}
        </div>






      </div>
    </div>
  )
}
