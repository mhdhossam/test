import React, { useState, ChangeEvent } from 'react';
import './CSS/Home.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Form data submitted:', formData);
  // };

  return (
    <>
      <div className="var">
        <div className="contact-form" >
          <label className='lablee'>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className='inputs'
          />

          <label className='lablee'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className='inputs'
          />
          
          <label className='lablee'>Phone:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
            className='inputs'
          />
          
          <label className='lablee'>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className='text'
          ></textarea>

          <button type="submit" className="btn">Send Message</button>
        </div>

        {/* Optional Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
