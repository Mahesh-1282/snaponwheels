"use client";

import { motion } from 'framer-motion';
import { Camera, Sparkles, Zap, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ModesContent() {
    return (
        <div className="container section" style={{ paddingTop: '120px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '80px' }}
            >
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Our <span className="text-gradient">Experiences</span></h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem' }}>Every mode is designed to bring out the best version of you.</p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '40px',
                padding: '0 20px'
            }}>
                <ModeLink
                    title="Selfie Mode"
                    desc="The Classic. 4 Poses. 2 Strips."
                    img="/images/selfie-mode.png"
                    link="/modes/selfie"
                    icon={<Camera />}
                    priority={true}
                />
                <ModeLink
                    title="Magic Snap"
                    desc="AR Filters & Color Tricks."
                    img="/images/magic-mode.png"
                    link="/modes/magic"
                    icon={<Sparkles />}
                    priority={true}
                />
                <ModeLink
                    title="Vibe Mode"
                    desc="Your Templates. Your Style."
                    img="/images/music-lover.png"
                    link="/modes/vibe"
                    icon={<Zap />}
                    priority={true}
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

function ModeLink({ title, desc, img, link, icon, priority = false }) {
    return (
        <Link href={link} style={{ textDecoration: 'none' }}>
            <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="mode-card"
                style={{
                    padding: 0,
                    overflow: 'hidden',
                    height: '100%',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: '24px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease'
                }}
            >
                {/* Image Section */}
                <div style={{
                    height: '320px',
                    position: 'relative',
                    background: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(0,0,0,0.03)'
                }}>
                    <Image
                        src={img}
                        alt={title}
                        fill
                        style={{ objectFit: 'contain', padding: '20px' }}
                        priority={priority}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Content Section */}
                <div style={{
                    padding: '30px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: '#ffffff'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
                        <div style={{
                            color: 'var(--primary)',
                            background: 'rgba(0, 243, 255, 0.08)',
                            padding: '12px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {icon}
                        </div>
                        <h2 style={{
                            fontSize: '1.8rem',
                            color: '#1a1a1a',
                            fontWeight: '700',
                            margin: 0,
                        }}>{title}</h2>
                    </div>
                    <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', margin: '0 0 20px 0', paddingLeft: '0' }}>{desc}</p>

                    <div style={{
                        color: '#00bcd4',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '1.1rem',
                    }}>
                        Explore Mode <ArrowRight size={18} />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
