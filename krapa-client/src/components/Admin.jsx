import React, { useState, useEffect } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

function Admin() {
  const [listings, setListings] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    description: '',
    images: []
  });

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = () => {
    fetch('http://localhost:4000/listings')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error('Error fetching listings:', err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, images: e.target.files }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('location', formData.location);
    form.append('price', formData.price);
    form.append('description', formData.description);

    for (let i = 0; i < formData.images.length; i++) {
      form.append('images', formData.images[i]);
    }

    fetch('http://localhost:4000/listings', {
      method: 'POST',
      body: form
    })
      .then(res => res.json())
      .then(data => {
        setFormData({
          title: '',
          location: '',
          price: '',
          description: '',
          images: []
        });
        fetchListings();
        alert('Property added successfully!');
      })
      .catch(err => console.error('Add error:', err));
  };

  const openEditModal = (listing) => {
    setFormData({
      title: listing.title,
      location: listing.location,
      price: listing.price,
      description: listing.description,
      images: [] // don't populate file inputs
    });
    setEditing(listing.id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/listings/${editing}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: formData.title,
        location: formData.location,
        price: formData.price,
        description: formData.description
      })
    })
      .then(res => res.json())
      .then(() => {
        fetchListings();
        setEditing(null);
        alert('Listing updated!');
      })
      .catch(err => console.error('Update error:', err));
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;

    fetch(`http://localhost:4000/listings/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setListings(prev => prev.filter(listing => listing.id !== id));
        alert('Listing deleted!');
        // Optional: force reload homepage data
        // window.location.href = "/";
      })
      .catch(err => console.error('Delete error:', err));
  };

  return (
    <section className="admin-section">
      <h2>Admin Dashboard</h2>
      <Link to="/" className="back-home-link">← Back to Homepage</Link>

      <h3>Add New Listing</h3>
      <form onSubmit={handleAdd} encType="multipart/form-data">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
        <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input type="file" name="images" multiple accept="image/*" onChange={handleFileChange} />
        <button type="submit">Add Listing</button>
      </form>

      <h3>Manage Listings</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing.id}>
              <td>{listing.title}</td>
              <td>{listing.location}</td>
              <td>{listing.price}</td>
              <td>{listing.description}</td>
              <td>
                <button onClick={() => openEditModal(listing)}>Edit</button>
                <button onClick={() => handleDelete(listing.id)} style={{ marginLeft: '8px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editing && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Listing</h3>
            <form onSubmit={handleUpdate}>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
              <input type="text" name="price" value={formData.price} onChange={handleChange} required />
              <textarea name="description" value={formData.description} onChange={handleChange} required />
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setEditing(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Admin;
