

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.init("-9J-h8OOG2g6hlJml"); 
        emailjs.send('service_ojhvki9', 'template_dg1ckva', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
                navigate('/thank-you'); // Redirect to Thank You page
            }, (error) => {
                console.log('FAILED...', error);
                setStatus('Message could not be sent. Please try again later.');
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out!</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </section>
    );
};

export default ContactForm;
