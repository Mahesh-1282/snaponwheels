"use client";

import { motion } from 'framer-motion';
import { Camera, Sparkles, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ModesPage() {
    return (
        <div className="container section" style={{ paddingTop: '50px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '80px' }}
            >
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Our <span className="text-gradient">Experiences</span></h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem' }}>Every mode is designed to bring out the best version of you.</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <ModeLink
                    title="Selfie Mode"
                    desc="The Classic. 4 Poses. 2 Strips."
                    img="/images/selfie-mode.png"
                    link="/modes/selfie"
                    icon={<Camera />}
                />
                <ModeLink
                    title="Magic Snap"
                    desc="AR Filters & Color Tricks."
                    img="/images/magic-mode.png"
                    link="/modes/magic"
                    icon={<Sparkles />}
                />
                <ModeLink
                    title="Vibe Mode"
                    desc="Your Templates. Your Style."
                    img="/images/music-lover.png"
                    link="/modes/vibe"
                    icon={<Zap />}
                />
                <ModeLink
                    title="Passport Mode"
                    desc="Professional & AI Powered."
                    img="/images/passport.png"
                    link="/modes/passport"
                    icon={<Users />}
                />
            </div>{/* ModesPage End */}
        </div>
    );
}

function ModeLink({ title, desc, img, link, icon }) {
    return (
        <Link href={link}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card"
                style={{ padding: 0, overflow: 'hidden', height: '100%', cursor: 'pointer' }}
            >
                <div style={{ height: '300px', position: 'relative' }}>
                    <Image src={img} alt={title} fill style={{ objectFit: 'contain', padding: '10px' }} />
                </div>
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.8)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ color: 'var(--primary)' }}>{icon}</div>
                        <h2 style={{ fontSize: '1.5rem', color: '#000' }}>{title}</h2>
                    </div>
                    <p style={{ color: '#666' }}>{desc}</p>
                </div>
            </motion.div>
        </Link>
    );
}
