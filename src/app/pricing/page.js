"use client";

import { motion } from 'framer-motion';
import { Package, Laptop, Server, Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    return (
        <div className="container section" style={{ paddingTop: '50px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Our <span className="text-gradient">Packages</span></h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    Choose the setup that fits your business needs. Flexible plans for franchisees and partners.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                <PricingCard
                    title="SaaS Only"
                    price="Software License"
                    features={["License for 1 Device", "All 4 Modes", "Cloud Storage", "Basic Support"]}
                    icon={<Server size={32} color="var(--primary)" />}
                />
                <PricingCard
                    title="Hardware Kit"
                    price="Laptop + Box"
                    features={["Touchscreen Laptop", "Custom Booth Shell", "Pre-configured OS", "Cabling Kit"]}
                    icon={<Laptop size={32} color="var(--secondary)" />}
                    featured
                />
                <PricingCard
                    title="Full Franchise"
                    price="End-to-End"
                    features={["Complete Hardware", "Branding Assets", "Area Exclusivity", "Priority Support"]}
                    icon={<Package size={32} color="var(--accent)" />}
                />
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Link href="/contact">
                    <button className="btn btn-outline">Request Custom Quote</button>
                </Link>
            </div>
        </div>
    );
}

function PricingCard({ title, price, features, icon, featured }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-card"
            style={{
                padding: '40px',
                border: featured ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                transform: featured ? 'scale(1.05)' : 'none'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                {icon}
                {featured && <span style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>POPULAR</span>}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px', color: '#000' }}>{title}</h3>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: featured ? 'var(--primary)' : '#000' }}>{price}</h2>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#555' }}>
                        <Check size={16} color="var(--primary)" />
                        {f}
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: '30px' }}>
                <Link href="/contact">
                    <button className={featured ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%' }}>
                        Select Plan
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}
