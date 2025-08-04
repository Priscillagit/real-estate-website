import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './Listings.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Listings() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/listings') // or your deployed URL
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error('Error fetching listings:', err));
  }, []);

  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(search.toLowerCase()) ||
      listing.location.toLowerCase().includes(search.toLowerCase())
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="listings" className="section">
      <h2>Our Listings</h2>

      <input
        type="text"
        placeholder="Search by title or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="listing-grid">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div key={listing.id} className="listing-card">
              {listing.images && listing.images.length > 0 && (
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
              )}

              <div className="listing-info">
                <h3>{listing.title}</h3>
                <p>{listing.location} - {listing.price}</p>
                <p>{listing.description}</p>
                <button>View Details</button>
              </div>
            </div>
          ))
        ) : (
          <p>No listings found.</p>
        )}
      </div>
    </section>
  );
}

export default Listings;
