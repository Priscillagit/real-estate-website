import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import Admin from './components/Admin';
import Login from './components/Login';
import ListingDetails from './components/ListingDetails';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/listings') // Replace with live URL if deployed
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error('Error fetching listings:', err));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Navbar />

      <main className="hero nude-bg">
        <div className="hero-content">
          <h1>Find Your Dream Home with KRAPA</h1>
          <p>Modern, affordable homes across Ghana.</p>
          <a href="#listings" className="hero-btn">View Listings</a>
        </div>
      </main>

      <section id="listings" className="section">
        <h2>Our Listings</h2>
        <div className="listing-grid">
          {listings.map(listing => (
            <div key={listing.id} className="listing-card">
              {Array.isArray(listing.images) && listing.images.length > 0 ? (
                <Slider {...sliderSettings}>
                  {listing.images.map((img, index) => (
                    <div key={index}>
                      <img
                        src={`http://localhost:4000${img}`}
                        alt={`Listing ${index}`}
                        style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </div>
                  ))}
                </Slider>
              ) : listing.image ? (
                <img
                  src={`http://localhost:4000${listing.image}`}
                  alt={listing.title}
                  style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
                />
              ) : (
                <div style={{ width: '100%', height: '250px', backgroundColor: '#ccc', borderRadius: '8px' }}>
                  <p>No Image</p>
                </div>
              )}

              <div className="listing-info">
                <h3>{listing.title}</h3>
                <p>{listing.location} - {listing.price}</p>
                <p>{listing.description}</p>
                <a href={`/listing/${listing.id}`}>View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Sections />
    </>
  );
}

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={() => setIsAdmin(true)} />} />
        <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/login" replace />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/" element={<Home key={Date.now()} />} />

      </Routes>
    </Router>
  );
}

export default App;
