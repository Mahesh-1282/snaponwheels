"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoSection from '../VideoSection';

export default function VibeContent() {
    return (
        <div className="container section" style={{ paddingTop: '120px' }}>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <div
                    style={{ flex: 1, minWidth: '280px', display: 'flex', gap: '20px', justifyContent: 'center', padding: '0 20px' }}
                >
                    <Image
                        src="/images/music-lover.png"
                        alt="Vibe Strip 1"
                        width={300}
                        height={600}
                        priority
                        sizes="(max-width: 768px) 45vw, 300px"
                        style={{ width: '48%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                    <Image
                        src="/images/friends-gold.png"
                        alt="Vibe Strip 2"
                        width={300}
                        height={600}
                        priority
                        sizes="(max-width: 768px) 45vw, 300px"
                        style={{ width: '48%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                </div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{ flex: 1.5, minWidth: '280px', padding: '0 20px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#000' }}><span className="text-gradient">Vibe</span> Mode</h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
                        Your event, your rules. Fully customizable templates that match your party's theme perfectly.
                    </p>

                    <div style={{ display: 'grid', gap: '30px' }}>
                        <FeatureBox
                            title="Mini Canva Editor"
                            desc="Don't settle for defaults. Use our editing tools to customize layouts, text, and backgrounds."
                        />
                        <FeatureBox
                            title="Flexible Captures"
                            desc="Standard 3-capture layout? Or want 4? We adjust to your needs (pricing varies)."
                        />
                        <FeatureBox
                            title="Print Size Freedom"
                            desc="The only mode offering full 4x6 inch postcard prints, in addition to the classic 2x6 strips."
                        />
                    </div>
                </motion.div>
            </div>
            <VideoSection videoId="pxmKpFivw94"
                description="Watch how easy it is to capture your memories. Just touch, pose, and snap! Our intuitive interface guides you through every step, ensuring you get the perfect shot every time."
            />
        </div>
    );
}

function FeatureBox({ title, desc }) {
    return (
        <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{title}</h3>
            <p style={{ color: '#888' }}>{desc}</p>
        </div>
    );
}
