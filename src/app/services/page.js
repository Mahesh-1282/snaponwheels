"use client";

import { motion } from 'framer-motion';
import { Music, Heart, Briefcase, PartyPopper } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <div className="container section" style={{ paddingTop: '90px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#000' }}>We <span className="text-gradient">Take Over</span></h1>
                <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    From intimate gatherings to massive college fests, we bring the energy and the tech.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '40px',
                padding: '0 20px'
            }}>
                <ServiceCard
                    title="College Fests"
                    desc="The ultimate crowd puller. Magic Snap and Vibe Mode are hits with the Gen-Z crowd."
                    icon={<Music size={40} color="var(--primary)" />}
                />
                <ServiceCard
                    title="Weddings"
                    desc="Capture love in style. Custom templates (Vibe Mode) to match the wedding theme."
                    icon={<Heart size={40} color="#ff0055" />}
                />
                <ServiceCard
                    title="Corporate Events"
                    desc="Brand activations and office parties. Add your logo to every strip."
                    icon={<Briefcase size={40} color="#bc13fe" />}
                />
                <ServiceCard
                    title="Private Parties"
                    desc="Birthdays, anniversaries, or just because. We make every moment memorable."
                    icon={<PartyPopper size={40} color="#ffcc00" />}
                />
            </div>

            <div style={{ textAlign: 'center', marginTop: '80px' }}>
                <Link href="/contact">
                    <button className="btn btn-primary">Book Your Event</button>
                </Link>
            </div>
        </div>
    );
}

function ServiceCard({ title, desc, icon }) {
    return (
        <motion.div
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
            className="service-card"
            style={{
                textAlign: 'center',
                padding: '40px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.05)',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease'
            }}
        >
            <div style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.02)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                alignItems: 'center',
                margin: '0 auto 20px auto'
            }}>{icon}</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#1a1a1a', fontWeight: 'bold' }}>{title}</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>{desc}</p>
        </motion.div>
    );
}
