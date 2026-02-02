"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles, Zap, Users, Globe, ArrowRight } from "lucide-react";

export default function HomeContent() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div style={{ overflow: 'hidden' }}>

            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center content horizontally
                padding: '100px 20px 60px 20px', // Adjusted for 90px navbar
                background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.05) 0%, rgba(255,255,255,1) 70%)',
                overflow: 'hidden', // Prevent scrollbars from floating elements
                position: 'relative'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap', // Allow wrapping on smaller screens
                    alignItems: 'center',
                    justifyContent: 'center', // Center when wrapped
                    gap: '40px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1,
                    marginTop: '-40px' // Visually pull content up further to reduce perceived gap
                }}>
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        style={{
                            flex: '1 1 500px', // Grow, Shrink, Basis (min-width before wrapping)
                            maxWidth: '100%',
                            textAlign: 'left', // Default left alignment
                            paddingTop: '20px'
                        }}
                    >
                        <motion.h1 variants={fadeInUp} style={{
                            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', // Slightly larger
                            marginBottom: '25px',
                            lineHeight: '1.1',
                            color: '#000',
                            fontWeight: '800'
                        }}>
                            Memory that <br /><span className="text-gradient">never expires</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} style={{
                            fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                            color: '#555',
                            marginBottom: '40px',
                            lineHeight: '1.6'
                        }}>
                            Capture the moment with the ultimate photo booth experience.
                            From <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>AI Magic</span> to
                            <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}> Vibe Checks</span>,
                            we turn your events into timeless memories.
                        </motion.p>

                        <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <Link href="/modes">
                                <button className="btn btn-primary" style={{
                                    display: 'flex',
                                    gap: '10px',
                                    alignItems: 'center',
                                    padding: '15px 35px',
                                    fontSize: '1.1rem'
                                }}>
                                    Start Snapping <Camera size={20} />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="btn btn-outline" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>
                                    Book Now
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Dynamic Visuals (Animated Stack) */}
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            height: '500px',
                            minWidth: '300px'
                        }}
                    >
                        <CyclingStack />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        translateX: '-50%',
                        color: 'var(--primary)'
                    }}
                >
                    <ArrowRight transform="rotate(90)" size={30} />
                </motion.div>
            </section>

            {/* Modes Section */}
            <section className="section container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: '#000' }}>Our <span className="text-gradient">Epic Modes</span></h2>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>Four ways to capture the moment. Infinite possibilities.</p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '30px',
                    paddingBottom: '40px',
                    paddingLeft: '20px',
                    paddingRight: '20px'
                }}>
                    <ModeCard
                        title="Selfie Mode"
                        desc="Capture 4 stunning shots. Choose between classic Color or dramatic B&W strips."
                        icon={<Camera size={40} color="var(--primary)" />}
                        image="/images/selfie-mode.png"
                        link="/modes/selfie"
                    />
                    <ModeCard
                        title="Magic Snap"
                        desc="Unleash filters! Puppy, Thug Life, and more. The user stays grey, but the filters pop in color settings."
                        icon={<Sparkles size={40} color="var(--secondary)" />}
                        image="/images/magic-mode.png"
                        link="/modes/magic"
                    />
                    <ModeCard
                        title="Vibe Mode"
                        desc="Customizable templates (Mini Canva). 4x6 or 2x6 prints. Design it your way."
                        icon={<Zap size={40} color="#ff0055" />}
                        image="/images/love-vibe.png"
                        link="/modes/vibe"
                    />
                    <ModeCard
                        title="Passport Mode"
                        desc="AI-guided steady shots. Automatic processing for perfect 8-copy prints."
                        icon={<Users size={40} color="#00ff88" />}
                        image="/images/passport.png"
                        link="/modes/passport"
                    />
                </div>
            </section>

            {/* Services & Franchise */}
            <section className="section" style={{ background: '#0a0a0a', color: '#fff' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '60px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff' }}>We Take Over <span className="text-gradient">Every Event</span></h2>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px', color: '#fff' }}>
                                <ListItem text="College Fests & Cultural Events" color="#fff" />
                                <ListItem text="Weddings & Receptions" color="#fff" />
                                <ListItem text="Corporate Parties" color="#fff" />
                                <ListItem text="Private Functions" color="#fff" />
                            </ul>
                            <br />
                            <Link href="/services">
                                <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>View Packages</button>
                            </Link>
                        </div>

                        <div className="glass-card" style={{ padding: '40px', textAlign: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <Globe size={60} color="var(--primary)" style={{ marginBottom: '20px' }} />
                            <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: '#fff' }}>Start Your Franchise</h3>
                            <p style={{ color: '#ccc', marginBottom: '30px' }}>
                                Get the end-to-end setup. Hardware, Software, or Full Box.
                                Subscription plans starting at just 10k/6mo.
                            </p>
                            <Link href="/franchise">
                                <button className="btn btn-primary">Become a Partner</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

const images = [
    "/images/selfie-mode.png",
    "/images/magic-mode.png",
    "/images/love-vibe.png",
    "/images/friends-gold.png"
];

function CyclingStack() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const rotation = [-5, 10, -10, 5]; // Predefined rotations for randomness feel due to cycling

    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '360px', height: '540px', margin: '0 auto' }}>
            {/* Background Blob/Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(0, 243, 255, 0.25) 0%, rgba(188, 19, 254, 0.15) 60%, transparent 100%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: -1
            }} />

            {images.map((img, i) => {
                const offset = (i - index + images.length) % images.length;
                if (offset > 2) return null; // Only show top 3

                return (
                    <motion.div
                        key={img}
                        initial={false}
                        animate={{
                            top: offset * 30 + 'px',
                            scale: 1 - offset * 0.05,
                            rotate: rotation[i],
                            zIndex: 100 - offset,
                            filter: `blur(${offset * 2}px) brightness(${1 - offset * 0.1})`,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            transformOrigin: 'top center',
                            left: 0,
                            right: 0,
                            margin: '0 auto',
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            // Removed border, radius, shadow from container
                        }}>
                            <Image
                                src={img}
                                alt="Snap Memory"
                                fill
                                style={{
                                    objectFit: 'contain', // Prevent cropping
                                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' // Shadow for the image itself
                                }}
                                sizes="(max-width: 768px) 90vw, 360px"
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

function ModeCard({ title, desc, icon, image, link }) {
    return (
        <Link href={link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="mode-card"
                style={{
                    overflow: 'hidden',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    background: '#ffffff', // Clean white background
                    border: '1px solid rgba(0,0,0,0.05)', // Subtle border
                    borderRadius: '24px', // Slightly rounder
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)', // Soft shadow
                    transition: 'all 0.3s ease'
                }}
            >
                {/* Image Section */}
                <div style={{
                    height: '320px',
                    position: 'relative',
                    width: '100%',
                    background: '#f8f9fa', // Very light grey for image bg
                    borderBottom: '1px solid rgba(0,0,0,0.03)'
                }}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: 'contain', padding: '20px' }}
                    />
                </div>

                {/* Content Section */}
                <div style={{
                    padding: '30px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#ffffff'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                        <div style={{
                            background: 'rgba(0, 243, 255, 0.08)', // Very subtle cyan tint
                            padding: '12px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            {icon}
                        </div>
                        <h3 style={{ fontSize: '1.6rem', margin: 0, color: '#1a1a1a', fontWeight: '700' }}>{title}</h3>
                    </div>

                    <p style={{ color: '#555', marginBottom: '25px', flex: 1, fontSize: '1rem', lineHeight: '1.6' }}>{desc}</p>

                    <div style={{
                        color: 'var(--primary)', // Cyan
                        // Using a darker shade for better readability on white if needed, but primary is cyan.
                        // Let's add a slight text shadow or use a darker cyan for text if the primary is too light.
                        // Assuming var(--primary) is #00f3ff which is bright.
                        // Let's use a custom color for the text link that is readable.
                        color: '#00bcd4', // A slightly darker cyan/teal for text readability
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

function ListItem({ text, color = 'inherit' }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem', color: color }}>
            <div style={{
                width: '10px',
                height: '10px',
                background: 'var(--primary)',
                borderRadius: '50%'
            }} />
            {text}
        </li>
    );
}
