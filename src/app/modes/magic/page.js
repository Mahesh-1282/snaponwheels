"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MagicMode() {
    return (
        <div className="container section">
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{ flex: 1, minWidth: '300px', display: 'flex', gap: '20px' }}
                >
                    <Image
                        src="/images/magic-mode.png"
                        alt="Magic Mode 1"
                        width={300}
                        height={600}
                        style={{ width: '48%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                    <Image
                        src="/images/magic-mode-1.png"
                        alt="Magic Mode 2"
                        width={300}
                        height={600}
                        style={{ width: '48%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{ flex: 1.5, minWidth: '300px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#000' }}><span className="text-gradient">Magic</span> Snap</h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
                        Step into augmented reality. Apply live filters like Snapchat, but with a premium twist.
                    </p>

                    <div style={{ display: 'grid', gap: '30px' }}>
                        <FeatureBox
                            title="Fun Filters"
                            desc="Puppy ears, Thug Life glasses, Bunny vibes, and more. Choose a different filter for each of your 4 captures!"
                        />
                        <FeatureBox
                            title="The 'Super Grey' Trick"
                            desc="Here's the magic: The user appears in stylish Grey/B&W, but the digital props (glasses, ears) remain in vivid Color. A unique artistic effect."
                        />
                        <FeatureBox
                            title="Dynamic Selection"
                            desc="Mix and match filters for the ultimate creative strip."
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function FeatureBox({ title, desc }) {
    return (
        <div style={{ borderLeft: '3px solid var(--secondary)', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{title}</h3>
            <p style={{ color: '#888' }}>{desc}</p>
        </div>
    );
}
