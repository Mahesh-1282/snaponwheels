"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SelfieMode() {
    return (
        <div className="container section">
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{ flex: 1, minWidth: '300px', display: 'flex', gap: '20px' }}
                >
                    <Image
                        src="/images/selfie-mode.png"
                        alt="Selfie Strip 1"
                        width={300}
                        height={600}
                        style={{ width: '48%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                    <Image
                        src="/images/selfie-mode-1.png"
                        alt="Selfie Strip 2"
                        width={300}
                        height={600}
                        style={{ width: '48%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{ flex: 1.5, minWidth: '300px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#000' }}><span className="text-gradient">Selfie</span> Mode</h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
                        The classic photo booth experience, reimagined. Perfect for capturing quick expressions and fun moments.
                    </p>

                    <div style={{ display: 'grid', gap: '30px' }}>
                        <FeatureBox
                            title="4 Stunning Captures"
                            desc="Strike 4 poses! The system automatically guides you through 4 sequential shots."
                        />
                        <FeatureBox
                            title="Color or B&W"
                            desc="Choose your vibe. Go for vibrant, high-fidelity Color or timeless, dramatic Black & White strips."
                        />
                        <FeatureBox
                            title="Instant Prints"
                            desc="Get 2x6 inch strips printed in seconds."
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function FeatureBox({ title, desc }) {
    return (
        <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{title}</h3>
            <p style={{ color: '#888' }}>{desc}</p>
        </div>
    );
}
