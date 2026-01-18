"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Get in <span className="text-gradient">Touch</span></h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem' }}>Book us for your next event or inquire about franchise opportunities.</p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '60px'
            }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="glass-card" style={{ height: '100%' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Our Details</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(0, 243, 255, 0.1)', padding: '15px', borderRadius: '12px' }}>
                                    <Phone size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <h4 style={{ color: '#555', marginBottom: '5px' }}>Phone</h4>
                                    <p style={{ fontSize: '1.1rem', color: '#000' }}>+91 98765 43210</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(188, 19, 254, 0.1)', padding: '15px', borderRadius: '12px' }}>
                                    <Mail size={24} color="var(--secondary)" />
                                </div>
                                <div>
                                    <h4 style={{ color: '#555', marginBottom: '5px' }}>Email</h4>
                                    <p style={{ fontSize: '1.1rem', color: '#000' }}>hello@snaponwheels.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: 'rgba(255, 0, 85, 0.1)', padding: '15px', borderRadius: '12px' }}>
                                    <MapPin size={24} color="var(--accent)" />
                                </div>
                                <div>
                                    <h4 style={{ color: '#555', marginBottom: '5px' }}>Headquarters</h4>
                                    <p style={{ fontSize: '1.1rem', color: '#000' }}>Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <form onSubmit={handleSubmit} className="glass-card">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Send a Message</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', color: '#aaa' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', color: '#aaa' }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                        placeholder="example@mail.com"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', color: '#aaa' }}>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', color: '#aaa' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                                    placeholder="Tell us about your event..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={status === 'loading'}
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                                <Send size={18} />
                            </button>

                            {status === 'success' && (
                                <p style={{ color: '#00ff88', textAlign: 'center', marginTop: '10px' }}>Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p style={{ color: '#ff0055', textAlign: 'center', marginTop: '10px' }}>Failed to send. Please try again.</p>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    background: 'rgba(255,255,255,0.8)',
    border: '1px solid #ccc',
    borderRadius: '8px',
    color: '#000',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s'
};
