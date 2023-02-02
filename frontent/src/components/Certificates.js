import React, { useState, useEffect } from "react";
import '../css-components/certificates.css'
import { PopUp } from "./PopUp";
import JsonData from '../data/data.json'

export const Certificates = (props) => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div id='portfolio' className='text-center'>
            <div className='container'>

                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                    Launch demo modal
                </button>
                <div className='row'>
                    <div className='portfolio-items'>
                        <PopUp data={landingPageData.Awards} />
                        {/* {props.data
                            ? props.data.map((d, i) => (
                                <div className='col-sm-6 col-md-4 col-lg-4'>
                                    <PopUp />
                                </div>
                            ))
                            : 'Loading...'} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
