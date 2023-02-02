import React, { useEffect, useState } from "react";
import JsonData from './../data/data.json'
import { Header } from "./Header";
import { Mission } from "./Mission";
import { About } from "./About";
import { Services } from "./Services";




export const HomePage = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (

        <div >
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Mission data={landingPageData.Mission} />



        </div>


    )
}