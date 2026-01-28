"use client";

import { motion } from 'framer-motion';
import { Package, Laptop, Server, Check } from 'lucide-react';
import Link from 'next/link';

export default function FranchisePage() {
    return (
        <div className="container section" style={{ paddingTop: '50px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3.5rem', marginBottom: '20px' }}
                >
                    Start Your <span className="text-gradient">Business</span>
                </motion.h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    Join the SnapOnWheels revolution. We provide end-to-end setup, software solutions, and 24/7 engineering support.
                </p>
            </div>

            {/* Packages Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                marginBottom: '100px'
            }}>
                <PackageCard
                    title="Software Only"
                    icon={<Server size={40} color="var(--primary)" />}
                    price="SaaS Plan"
                    features={[
                        "All 4 Modes Included",
                        "Cloud Processing",
                        "Email & SMS Integration",
                        "24/7 Remote Support"
                    ]}
                />
                <PackageCard
                    title="Laptop & Box Setup"
                    icon={<Laptop size={40} color="var(--secondary)" />}
                    price="Hardware Kit"
                    features={[
                        "High-End Touch Laptop",
                        "Custom Booth Enclosure",
                        "Software Pre-installed",
                        "Onboarding Training"
                    ]}
                    featured
                />
                <PackageCard
                    title="End-to-End Deal"
                    icon={<Package size={40} color="var(--accent)" />}
                    price="Full Franchise"
                    features={[
                        "Complete Booth Rig",
                        "Printer & Consumables",
                        "Marketing Materials",
                        "Dedicated Account Manager"
                    ]}
                />
            </div>

            {/* Subscription Plan */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                style={{
                    background: 'linear-gradient(45deg, rgba(0,243,255,0.1), rgba(188,19,254,0.1))',
                    borderRadius: '20px',
                    padding: '40px',
                    border: '1px solid var(--glass-border)',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Partner Subscription</h2>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '10px' }}>
                    ₹10,000 <span style={{ fontSize: '1.2rem', color: '#aaa' }}>/ 6 months</span>
                </div>
                <p style={{ color: '#aaa', marginBottom: '30px' }}>
                    Includes regular software updates, new filters, and priority issue resolution without engineer visits.
                </p>
                <Link href="/contact">
                    <button className="btn btn-primary">Get Started</button>
                </Link>
            </motion.div>
        </div>
    );
}

function PackageCard({ title, icon, price, features, featured }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{
                padding: '40px',
                position: 'relative',
                border: featured ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                boxShadow: featured ? '0 0 20px rgba(0,243,255,0.1)' : 'none'
            }}
        >
            {featured && (
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'var(--primary)',
                    color: 'black',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                }}>
                    Most Popular
                </div>
            )}
            <div style={{ marginBottom: '20px' }}>{icon}</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{title}</h3>
            <div style={{ fontSize: '1.5rem', color: '#888', marginBottom: '30px' }}>{price}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Check size={18} color="var(--primary)" />
                        {f}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
