import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMessage(data.message);
      setLoading(false);
      if (data.success) setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Failed to send email.');
      setLoading(false);
    }
  };

  return (
    <section className="contact container section" id="Contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋🏻</p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                required
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                required
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {responseMessage && <p>{responseMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
