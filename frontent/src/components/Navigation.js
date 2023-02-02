import React from "react"
import '../css-components/navigation.css'

export const Navigation = (props) => {
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='/'>
              SGI
            </a>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              
              <li>
                <a href='/#about' className='page-scroll'>
                  About us
                </a>
              </li>
             <li>
                <a href='/#mission' className='page-scroll'>
                  Mission and Vision
                </a>
              </li>
              <li>
                <a href='/#services' className='page-scroll'>
                  Services
                </a>
              </li>
             
              <li>
                <a href='/awards' className='page-scroll'>
                  Awards
                </a>
              </li>
              {/* <li>
                <a href='/certificates' className='page-scroll'>
                  Certificates
                </a>
              </li> */}
              <li>
                <a href='/contact' className='page-scroll'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  