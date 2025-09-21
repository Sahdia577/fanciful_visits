import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { TravelFaq } from './pages/TravelFaq';
import { LocationToggle } from './pages/LocationToggle';
import { Hero } from './pages/Hero';


export const App = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/pages/TravelFaq' element={<TravelFaq />} />
            <Route path='/pages/LocationToggle' element={<LocationToggle />} />
          </Routes>
      </Router>
    </>
  );
};





















/*
import { LocationToggle } from './pages/LocationToggle';


export const App = () => {

  return (
    <>

      <LocationToggle />
    </>
  );
};


import { Hero } from './pages/Hero';
      <Hero />


*/