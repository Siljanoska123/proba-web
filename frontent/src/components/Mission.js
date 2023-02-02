import React from "react";
import '../css-components/mission.css'

export const Mission = (props) => {
    return (
        <div id='mission' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <br />
                    <br />
                    <br />
                    <h2>Mission and Vision</h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className='col-xs-6 col-md-32'>
                                {' '}
                                <i className={d.icon}></i>

                                <div >
                                    <h3>{d.title}</h3>
                                    <p className="mission-vision-text">{d.text}</p>
                                </div>

                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}
