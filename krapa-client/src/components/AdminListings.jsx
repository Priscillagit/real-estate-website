// AdminListings.jsx
import React, { useEffect, useState } from 'react';
import './AdminListings.css';

function AdminListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/listings')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error('Error loading listings:', err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/listings/${id}`, {
    
      method: 'DELETE'
    })
    .then(() => {
      setListings(prev => prev.filter(listing => listing.id !== id));
    })
    .catch(err => console.error('Delete failed:', err));
    const navigate = useNavigate();

const goBack = () => {
  navigate('/');
};

  };

  return (
    <div className="admin-listings">
      <h2>Manage Listings</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing.id}>
              <td><img src={listing.image} alt={listing.title} width="80" /></td>
              <td>{listing.title}</td>
              <td>{listing.location}</td>
              <td>{listing.price}</td>
              <td>{listing.description}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(listing.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
  <button onClick={goBack} className="back-button">← Back to Listings</button>

  
}

export default AdminListings;
