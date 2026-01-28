import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            background: '#f5f5f5',
            borderTop: '1px solid var(--glass-border)',
            padding: '60px 0 20px 0',
            marginTop: '100px'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Brand */}
                    <div>
                        <h3 className="text-gradient" style={{ fontSize: '24px', marginBottom: '20px' }}>SnapOnWheels</h3>
                        <p style={{ color: '#888', lineHeight: '1.6' }}>
                            Capture memories in style. From Selfie Modes to AI-powered Passport printing, we bring the vibe to your events.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link href="/modes">Our Modes</Link></li>
                            <li><Link href="/services">Services & Events</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/franchise">Franchise</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#888' }}>
                                <Phone size={18} color="var(--primary)" />
                                <span>+91 88856 66478</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#888' }}>
                                <Mail size={18} color="var(--primary)" />
                                <span>snaponwheel@gmail.com</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#888' }}>
                                <MapPin size={18} color="var(--primary)" />
                                <span>Hyderabad, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '20px',
                    textAlign: 'center',
                    color: '#666',
                    fontSize: '14px'
                }}>
                    © {new Date().getFullYear()} SnapOnWheels. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
