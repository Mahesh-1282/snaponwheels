"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoSection from '../VideoSection';

export default function PassportContent() {
    return (
        <div className="container section" style={{ paddingTop: '120px' }}>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}
                >
                    <Image
                        src="/images/passport-1.png"
                        alt="Passport Strip 1"
                        width={600}
                        height={1200}
                        priority
                        sizes="(max-width: 768px) 80vw, 400px"
                        style={{ width: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                    <Image
                        src="/images/passport-2.png"
                        alt="Passport Strip 2"
                        width={600}
                        height={1200}
                        priority
                        sizes="(max-width: 768px) 80vw, 400px"
                        style={{ width: '80%', height: 'auto', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    />
                </motion.div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    style={{ flex: 1, minWidth: '280px', padding: '0 20px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#000' }}><span className="text-gradient">Passport</span> Mode</h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
                        Professional utility meets AI precision. Get official passport-size photos in minutes.
                    </p>

                    <div style={{ display: 'grid', gap: '30px' }}>
                        <FeatureBox
                            title="AI-Guided Capture"
                            desc="A video guide helps you position yourself perfectly. The ML pipeline detects when you are steady and ready."
                        />
                        <FeatureBox
                            title="Smart Countdown"
                            desc="A 5-second countdown ensures you are composed before the shutter fires automatically."
                        />
                        <FeatureBox
                            title="8 Copies Output"
                            desc="We process the single best shot and format it into a sheet of 8 verified passport copies."
                        />
                    </div>
                </motion.div>
            </div>
            <VideoSection videoId="dQw4w9WgXcQ" />
        </div>
    );
}

function FeatureBox({ title, desc }) {
    return (
        <div style={{ borderLeft: '3px solid white', paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{title}</h3>
            <p style={{ color: '#888' }}>{desc}</p>
        </div>
    );
}
