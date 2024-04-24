import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '5%' }}>
      <h1>Contact Us</h1>
      <p>Have a question or feedback? We'd love to hear from you!</p>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" style={{ marginBottom: '2%', padding: '1%', width: '50%' }} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ marginBottom: '2%', padding: '1%', width: '50%' }} required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" style={{ marginBottom: '2%', padding: '1%', width: '50%' }} required></textarea>
        
        <button type="submit" style={{ padding: '1%', width: '50%', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
