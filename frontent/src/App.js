import React, { useEffect, useState } from "react";
import JsonData from './data/data.json'
import './App.css'
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Awards } from "./components/Awards";
import {Route, Routes} from 'react-router-dom'
import { HomePage } from "./components/HomePage";

 

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

export function App() {



  
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:9000")
  //   .then((res) => res.json())
  //   .then((data) => setLandingPageData(JsonData))
  //  ;
  // }, []);


  return (
    <div>
      <Navigation />
      
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/awards" element={<Awards data={landingPageData.Awards} />} />
      
        <Route path="/contact" element={<Footer data={landingPageData.Footer} />} />
       
      </Routes>
      
      <Footer data={landingPageData.Footer} />

    </div>
  )
}