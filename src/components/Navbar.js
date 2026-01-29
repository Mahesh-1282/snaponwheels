"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      height: '80px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px'
      }}>
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} style={{ zIndex: 1002 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/SnaponWheelsLogo.png" alt="SnapOnWheels Logo" style={{ maxHeight: '50px', width: 'auto', objectFit: 'contain' }} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {['Home', 'Modes', 'Services', 'Pricing', 'Contact'].map((item) => (
            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} key={item}>
              <span className="nav-link" style={{ fontSize: '16px', fontWeight: '500', cursor: 'pointer', transition: 'color 0.3s' }}>{item}</span>
            </Link>
          ))}
          <Link href="/contact">
            <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '50px' }}>Book Now</button>
          </Link>
        </div>

        {/* Mobile Toggle (Cool Animated Hamburger) */}
        <div className="mobile-toggle" onClick={toggleMenu} style={{ zIndex: 1002 }}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px'
        }}
        className="mobile-menu-overlay"
      >
        {['Home', 'Modes', 'Services', 'Pricing', 'Contact'].map((item) => (
          <motion.div variants={itemVariants} key={item}>
            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              <span style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#333',
                letterSpacing: '-1px',
                position: 'relative',
                display: 'inline-block'
              }}>
                {item}
              </span>
            </Link>
          </motion.div>
        ))}

        <motion.div variants={itemVariants} style={{ marginTop: '20px' }}>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="btn btn-primary" style={{
              padding: '15px 40px',
              fontSize: '18px',
              borderRadius: '50px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              Book Your Event
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .desktop-menu {
          display: flex;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .mobile-toggle {
          display: none;
          cursor: pointer;
          width: 30px;
          height: 20px;
          position: relative;
        }
        
        /* Hamburger Animation Styles */
        .hamburger {
          width: 30px;
          height: 20px;
          position: relative;
          transform: rotate(0deg);
          transition: .5s ease-in-out;
          cursor: pointer;
        }
        
        .hamburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: #333;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
        }

        .hamburger span:nth-child(1) {
          top: 0px;
        }

        .hamburger span:nth-child(2) {
          top: 9px;
        }

        .hamburger span:nth-child(3) {
          top: 18px;
        }

        .hamburger.open span:nth-child(1) {
          top: 9px;
          transform: rotate(135deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger.open span:nth-child(3) {
          top: 9px;
          transform: rotate(-135deg);
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
