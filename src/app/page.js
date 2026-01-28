"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Sparkles, Zap, Users, Globe, ArrowRight } from "lucide-react";

export default function Home() {
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
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.05) 0%, rgba(255,255,255,1) 70%)'
      }}>
        <motion.div initial="initial" animate="animate" variants={stagger}>
          <motion.h1 variants={fadeInUp} style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            marginBottom: '20px',
            lineHeight: '1.1',
            color: '#000'
          }}>
            Memory that <span className="text-gradient">never expires</span>
          </motion.h1>
          <motion.p variants={fadeInUp} style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            color: '#555',
            maxWidth: '800px',
            margin: '0 auto 40px auto'
          }}>
            The ultimate photo booth experience. From AI-driven Passport photos to Magic AR filters.
            We take over your events, college fests, and parties with style.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/modes">
              <button className="btn btn-primary" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                Explore Modes <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn btn-outline">Book for Event</button>
            </Link>
          </motion.div>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
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
      <section className="section" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>We Take Over <span className="text-gradient">Every Event</span></h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <ListItem text="College Fests & Cultural Events" />
                <ListItem text="Weddings & Receptions" />
                <ListItem text="Corporate Parties" />
                <ListItem text="Private Functions" />
              </ul>
              <br />
              <Link href="/services">
                <button className="btn btn-outline">View Packages</button>
              </Link>
            </div>

            <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
              <Globe size={60} color="var(--primary)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Start Your Franchise</h3>
              <p style={{ color: '#aaa', marginBottom: '30px' }}>
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

function ModeCard({ title, desc, icon, image, link }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card"
      style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ height: '300px', position: 'relative', width: '100%' }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'contain', padding: '10px' }} // contain to show full strip
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
        }} />
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{title}</h3>
        <p style={{ color: '#888', marginBottom: '20px', flex: 1 }}>{desc}</p>
        <Link href={link} style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

function ListItem({ text }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem' }}>
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
