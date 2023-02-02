import React from "react";
import video from '../video.mp4'
import '../css-components/header.css'

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <video src={video} loop autoPlay muted className="video">

        </video>
        <div className='overlay'></div>
        
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>

                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='/awards'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        

      </div>

    </header>
  )
}
