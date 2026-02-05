"use client";

import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer style={{
            background: '#f5f5f5',
            borderTop: '1px solid var(--glass-border)',
            padding: '80px 0 30px 0',
            marginTop: '100px'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '50px',
                    marginBottom: '60px'
                }}>
                    {/* Brand */}
                    <div>
                        <h3 className="text-gradient" style={{ fontSize: '26px', marginBottom: '20px', fontWeight: '800' }}>SnapOnWheels</h3>
                        <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px' }}>
                            Capture memories in style. From Selfie Modes to AI-powered Passport printing, we bring the vibe to your events.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Modes', 'Services', 'Pricing', 'Franchise'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="footer-link">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#555' }}>
                                <div style={iconBoxStyle}><Phone size={16} color="var(--primary)" /></div>
                                <span style={{ fontSize: '15px' }}>+91 88856 66478</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#555' }}>
                                <div style={iconBoxStyle}><Mail size={16} color="var(--primary)" /></div>
                                <span style={{ fontSize: '15px' }}>snaponwheel@gmail.com</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#555' }}>
                                <div style={iconBoxStyle}><MapPin size={16} color="var(--primary)" /></div>
                                <span style={{ fontSize: '15px' }}>Hyderabad, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>Connect with Us</h4>
                        <p style={{ color: '#555', marginBottom: '20px', fontSize: '14px' }}>
                            Follow us for the latest updates and event captures.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <SocialButton href="https://www.instagram.com/snaponwheel?igsh=MW1wZTA4aWhsM2N1dQ==" icon={<Instagram size={20} />} label="Instagram" color="#E1306C" />
                            <SocialButton href="#" icon={<Linkedin size={20} />} label="LinkedIn" color="#0077B5" />
                            <SocialButton href="https://youtube.com/@snaponwheels?si=QzI4337y2jhaQTBRw" icon={<Youtube size={20} />} label="YouTube" color="#FF0000" />
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '30px',
                    textAlign: 'center',
                    color: '#888',
                    fontSize: '14px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <span>© {new Date().getFullYear()} SnapOnWheels. All rights reserved.</span>
                    <span style={{ fontSize: '13px' }}>Made with ❤️ in Hyderabad</span>
                </div>
            </div>

            <style jsx>{`
                .footer-link {
                    color: #555;
                    transition: color 0.2s;
                    font-size: 15px;
                }
                .footer-link:hover {
                    color: var(--primary);
                }
            `}</style>
        </footer>
    );
}

const iconBoxStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
};

function SocialButton({ href, icon, label, color }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                width: '45px',
                height: '45px',
                borderRadius: '12px',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                color: '#333',
                cursor: 'pointer',
                border: '1px solid rgba(0,0,0,0.02)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = color}
            onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
        >
            {icon}
        </motion.a>
    );
}
