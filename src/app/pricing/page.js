"use client";

import { motion } from 'framer-motion';
import { Package, Laptop, Server, Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    return (
        <div className="container section" style={{ paddingTop: '90px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Our <span className="text-gradient">Packages</span></h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    Choose the setup that fits your business needs. Flexible plans for franchisees and partners.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '40px',
                padding: '0 20px'
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
            whileHover={{ scale: 1.02, boxShadow: featured ? '0 20px 40px rgba(188, 19, 254, 0.2)' : '0 20px 40px rgba(0, 0, 0, 0.1)' }}
            className="pricing-card"
            style={{
                padding: '40px',
                background: '#ffffff',
                border: featured ? '2px solid #bc13fe' : '1px solid rgba(0,0,0,0.05)',
                borderRadius: '24px',
                boxShadow: featured ? '0 10px 30px rgba(188, 19, 254, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.05)',
                transform: featured ? 'scale(1.05)' : 'none',
                position: 'relative',
                zIndex: featured ? 2 : 1
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{
                    padding: '10px',
                    borderRadius: '12px',
                    background: featured ? 'rgba(188, 19, 254, 0.05)' : 'rgba(0,0,0,0.03)'
                }}>
                    {icon}
                </div>
                {featured && <span style={{ color: '#bc13fe', fontSize: '0.9rem', fontWeight: 'bold', background: 'rgba(188, 19, 254, 0.1)', padding: '5px 12px', borderRadius: '20px' }}>POPULAR</span>}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px', color: '#1a1a1a' }}>{title}</h3>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: featured ? '#bc13fe' : '#1a1a1a', fontWeight: 'bold' }}>{price}</h2>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#555' }}>
                        <Check size={16} color={featured ? "#bc13fe" : "var(--primary)"} />
                        {f}
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: '30px' }}>
                <Link href="/contact">
                    <button className={featured ? "btn btn-secondary" : "btn btn-outline"} style={{
                        width: '100%',
                        borderRadius: '50px',
                        background: featured ? 'var(--secondary)' : 'transparent',
                        color: featured ? '#fff' : 'var(--primary)',
                        border: featured ? 'none' : '2px solid var(--primary)'
                    }}>
                        Select Plan
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}
