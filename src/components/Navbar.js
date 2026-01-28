"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px'
      }}>
        {/* Logo */}
        <Link href="/">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/SnaponWheelsLogo.png" alt="SnapOnWheels Logo" style={{ maxHeight: '50px', width: 'auto', objectFit: 'contain' }} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {['Home', 'Modes', 'Services', 'Pricing', 'Contact'].map((item) => (
            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} key={item}>
              <span style={{ fontSize: '16px', fontWeight: '500' }}>{item}</span>
            </Link>
          ))}
          <Link href="/contact">
            <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>Book Now</button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--background)',
            padding: '20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center'
          }}
        >
          {['Home', 'Modes', 'Services', 'Pricing', 'Contact'].map((item) => (
            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} key={item} onClick={() => setIsOpen(false)}>
              <span style={{ fontSize: '18px' }}>{item}</span>
            </Link>
          ))}
        </motion.div>
      )}

      <style jsx>{`
        .desktop-menu {
          display: flex;
        }
        .mobile-toggle {
          display: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
