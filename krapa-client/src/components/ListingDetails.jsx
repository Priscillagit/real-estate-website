// components/ListingDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/listings/${id}`)
      .then(res => res.json())
      .then(data => setListing(data))
      .catch(err => console.error('Error fetching listing:', err));
  }, [id]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="listing-details-container" style={{ padding: '2rem' }}>
      <h2>{listing.title}</h2>
      <p><strong>Location:</strong> {listing.location}</p>
      <p><strong>Price:</strong> {listing.price}</p>
      <p><strong>Description:</strong> {listing.description}</p>

      <Slider {...sliderSettings}>
        {(listing.images || []).map((img, index) => (
          <div key={index}>
            <img
              src={`http://localhost:4000${img}`}
              alt={`Listing ${index}`}
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ListingDetails;
