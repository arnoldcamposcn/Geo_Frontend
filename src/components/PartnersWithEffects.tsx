import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import Partners10 from '../imports/Partners-30-337';

interface PartnersWithEffectsProps {
  onNavigate?: (page: string) => void;
}

export function PartnersWithEffects({ onNavigate }: PartnersWithEffectsProps = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);

  // Add click handlers to contact buttons after component mounts
  useEffect(() => {
    const handleContactClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const button = target.closest('[data-name="SlotClone"]');
      
      if (button && onNavigate) {
        e.preventDefault();
        e.stopPropagation();
        
        // Scroll to top and navigate to contact page
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          onNavigate('contact');
        }, 300);
      }
    };

    // Find all contact buttons
    const contactButtons = document.querySelectorAll('[data-name="SlotClone"]');
    contactButtons.forEach(button => {
      button.addEventListener('click', handleContactClick as EventListener);
      (button as HTMLElement).style.cursor = 'pointer';
    });

    // Cleanup
    return () => {
      contactButtons.forEach(button => {
        button.removeEventListener('click', handleContactClick as EventListener);
      });
    };
  }, [onNavigate]);

  return (
    <div ref={sectionRef} className="w-full relative">
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        style={{ y, opacity }}
      >
        {/* Contenedor responsivo con centrado perfecto */}
        <div className="relative w-full">
          <div className="mx-auto">
            {/* Wrapper responsivo con escala dinámica */}
            <motion.div 
              className="partners-wrapper"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="partners-scaler">
                <Partners10 />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced hover effects, parallax, and responsive scaling using CSS */}
        <style>{`
          /* Responsive scaling and centering system */
          .partners-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .partners-scaler {
            width: 1534px;
            max-width: 100%;
            transform-origin: top center;
            transform: scale(var(--partners-scale));
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Default scale for large screens */
          :root {
            --partners-scale: 1;
          }

          /* Hide the title and description from Figma import (we use the one in Partners.tsx) */
          [data-name="Partners"] > div[data-name="Container"]:first-child {
            display: none !important;
          }
          
          /* Adjust layout after hiding header */
          [data-name="Partners"] {
            min-height: auto !important;
          }
          
          /* Adjust vertical spacing of cards container */
          div[data-name="Container"][class*="gap-[32px]"][class*="grid"] {
            margin-top: 0 !important;
            position: relative !important;
            top: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
          
          /* Adjust bottom section */
          div[data-name="Container"][class*="h-[162px]"][class*="bg-[#1c1c1c]"] {
            position: relative !important;
            left: 50% !important;
            top: auto !important;
            transform: translateX(-50%) !important;
            margin-top: 32px !important;
          }

          /* Responsive breakpoints - optimized for all devices */
          @media (max-width: 1600px) {
            :root {
              --partners-scale: 0.92;
            }
          }

          @media (max-width: 1500px) {
            :root {
              --partners-scale: 0.85;
            }
          }
          
          @media (max-width: 1400px) {
            :root {
              --partners-scale: 0.78;
            }
          }
          
          @media (max-width: 1280px) {
            :root {
              --partners-scale: 0.70;
            }
          }
          
          @media (max-width: 1150px) {
            :root {
              --partners-scale: 0.62;
            }
          }
          
          @media (max-width: 1024px) {
            :root {
              --partners-scale: 0.55;
            }
          }
          
          @media (max-width: 900px) {
            :root {
              --partners-scale: 0.48;
            }
          }
          
          /* Tablet landscape */
          @media (max-width: 820px) {
            :root {
              --partners-scale: 0.43;
            }
          }
          
          /* Tablet portrait & large mobile */
          @media (max-width: 768px) {
            :root {
              --partners-scale: 0.38;
            }
            
            .partners-wrapper {
              padding: 0 8px;
            }
          }
          
          @media (max-width: 700px) {
            :root {
              --partners-scale: 0.34;
            }
          }
          
          @media (max-width: 640px) {
            :root {
              --partners-scale: 0.30;
            }
          }
          
          /* Standard mobile */
          @media (max-width: 580px) {
            :root {
              --partners-scale: 0.27;
            }
          }
          
          @media (max-width: 520px) {
            :root {
              --partners-scale: 0.24;
            }
          }
          
          @media (max-width: 480px) {
            :root {
              --partners-scale: 0.22;
            }
          }
          
          @media (max-width: 430px) {
            :root {
              --partners-scale: 0.20;
            }
          }
          
          /* iPhone and small mobile */
          @media (max-width: 390px) {
            :root {
              --partners-scale: 0.18;
            }
          }
          
          @media (max-width: 360px) {
            :root {
              --partners-scale: 0.16;
            }
          }
          
          @media (max-width: 340px) {
            :root {
              --partners-scale: 0.15;
            }
          }

          /* Enhanced hover effects for partner country cards */
          [data-name="Container"][class*="grid-area"] {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }
          
          [data-name="Container"][class*="grid-area"]:hover {
            transform: translateY(-20px) scale(1.03);
            box-shadow: 0 28px 56px rgba(199, 72, 44, 0.25), 
                        0 0 100px rgba(199, 72, 44, 0.2);
          }

          /* Glow effect on card hover */
          [data-name="Container"][class*="grid-area"]::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: 10px;
            background: linear-gradient(135deg, 
              transparent, 
              rgba(199, 72, 44, 0.4), 
              transparent,
              rgba(199, 72, 44, 0.3));
            opacity: 0;
            transition: opacity 0.6s;
            pointer-events: none;
            z-index: -1;
          }

          [data-name="Container"][class*="grid-area"]:hover::before {
            opacity: 1;
            animation: glowPulse 2s ease-in-out infinite;
          }

          @keyframes glowPulse {
            0%, 100% {
              opacity: 0.8;
            }
            50% {
              opacity: 1;
            }
          }

          /* Enhanced border glow on hover */
          [data-name="Container"][class*="grid-area"]:hover > div[aria-hidden="true"] {
            border-color: rgba(199, 72, 44, 0.7) !important;
            box-shadow: inset 0 0 30px rgba(199, 72, 44, 0.3);
          }

          /* Flag images parallax and scale on card hover */
          [data-name="Container"][class*="grid-area"] img {
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          }

          [data-name="Container"][class*="grid-area"]:hover img {
            transform: scale(1.2) translateY(-8px);
          }

          /* Text enhancement on card hover */
          [data-name="Container"][class*="grid-area"]:hover [data-name="Heading 3"] p,
          [data-name="Container"][class*="grid-area"]:hover [data-name="Heading 4"] p {
            color: rgba(255, 255, 255, 1) !important;
            text-shadow: 0 3px 12px rgba(199, 72, 44, 0.4);
            transition: all 0.4s;
          }

          /* Icons glow on card hover */
          [data-name="Container"][class*="grid-area"]:hover [data-name="Icon"] svg path {
            stroke: #ff6b4a !important;
            filter: drop-shadow(0 0 6px rgba(199, 72, 44, 0.8));
            transition: all 0.4s;
          }

          /* Enhanced contact button hover */
          [data-name="SlotClone"] {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          [data-name="SlotClone"]::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(120deg, 
              transparent, 
              rgba(199, 72, 44, 0.4), 
              transparent);
            transform: translateX(-100%);
            transition: transform 0.7s;
          }

          [data-name="SlotClone"]:hover::before {
            transform: translateX(100%);
          }

          [data-name="SlotClone"]:hover {
            background-color: rgba(199, 72, 44, 0.25) !important;
            transform: translateY(-4px) scale(1.03);
            box-shadow: 0 10px 24px rgba(199, 72, 44, 0.35);
          }
          
          [data-name="SlotClone"]:hover > div[aria-hidden="true"] {
            border-color: #C7482C !important;
            box-shadow: inset 0 0 16px rgba(199, 72, 44, 0.3);
          }

          [data-name="SlotClone"]:hover p {
            color: rgba(255, 255, 255, 1) !important;
            transform: translateX(3px);
            transition: all 0.4s;
          }

          [data-name="SlotClone"]:hover [data-name="Icon"] svg path {
            stroke: white !important;
            transform: translateX(4px);
            transition: all 0.4s;
          }

          [data-name="SlotClone"]:active {
            transform: translateY(-2px) scale(1.01);
          }

          /* Email link enhanced hover effect */
          [data-name="Link"] {
            position: relative;
            cursor: pointer;
            display: inline-block;
          }

          [data-name="Link"]::after {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #C7482C, #ff6b4a);
            transition: width 0.5s ease-out;
          }

          [data-name="Link"]:hover::after {
            width: 100%;
          }

          [data-name="Link"] p {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          [data-name="Link"]:hover p {
            color: #ff6b4a !important;
            transform: translateX(3px);
          }

          /* Presence Regional section hover */
          [data-name="Container"][class*="bg-[#1c1c1c]"][class*="h-[162px]"] {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          [data-name="Container"][class*="bg-[#1c1c1c]"][class*="h-[162px]"]:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px rgba(199, 72, 44, 0.2);
          }

          [data-name="Container"][class*="bg-[#1c1c1c]"][class*="h-[162px]"]:hover [data-name="Icon"] svg path {
            stroke: #ff6b4a !important;
            filter: drop-shadow(0 0 8px rgba(199, 72, 44, 0.7));
          }

          [data-name="Container"][class*="bg-[#1c1c1c]"][class*="h-[162px]"]:hover [data-name="Heading 3"] p {
            color: #ff6b4a !important;
            transition: color 0.4s;
          }

          /* Staggered entry animation for cards */
          [data-name="Container"][class*="grid-area"] {
            animation: fadeInUpCard 1s cubic-bezier(0.4, 0, 0.2, 1) backwards;
          }

          [data-name="Container"][class*="1_/_1"] {
            animation-delay: 0.15s;
          }

          [data-name="Container"][class*="1_/_2"] {
            animation-delay: 0.3s;
          }

          [data-name="Container"][class*="1_/_3"] {
            animation-delay: 0.45s;
          }

          @keyframes fadeInUpCard {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.94);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          /* Title animations */
          [data-name="Partners"] > p {
            animation: fadeInTitle 1.2s ease-out backwards;
          }

          @keyframes fadeInTitle {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Smooth hover for all text elements */
          [data-name="Container"] p:not([data-name="Link"] p),
          [data-name="Container"] svg {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Country name hover in header */
          [data-name="Container"] > div > [data-name="Heading 3"] {
            transition: transform 0.3s;
          }

          [data-name="Container"]:hover > div > [data-name="Heading 3"] {
            transform: translateY(-2px);
          }

          /* Responsive adjustments for mobile */
          @media (max-width: 768px) {
            [data-name="Container"][class*="grid-area"]:hover {
              transform: translateY(-8px) scale(1.01);
            }

            [data-name="SlotClone"]:hover {
              transform: translateY(-2px) scale(1.01);
            }

            .partners-scaler {
              margin: 0 auto;
            }
            
            /* Reduce excessive animations on mobile */
            [data-name="Container"][class*="grid-area"]:hover img {
              transform: scale(1.1) translateY(-4px);
            }
          }

          /* Small mobile optimizations */
          @media (max-width: 480px) {
            [data-name="Container"][class*="grid-area"]:hover {
              transform: translateY(-4px) scale(1.005);
            }
            
            /* Simplify hover effects on small screens */
            [data-name="Container"][class*="grid-area"]::before {
              display: none;
            }
            
            .partners-wrapper {
              padding: 0 4px;
            }
          }

          /* Prevent text selection on interactive elements */
          [data-name="SlotClone"],
          [data-name="Link"] {
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
          }

          /* Smooth scrolling for mobile touch */
          @media (max-width: 768px) {
            .partners-wrapper {
              -webkit-overflow-scrolling: touch;
              overflow-x: visible;
            }
          }

          /* Ensure content is centered on all screens */
          .partners-scaler {
            margin: 0 auto;
            display: block;
          }

          /* Prevent horizontal scroll issues */
          @media (max-width: 1024px) {
            .partners-wrapper {
              overflow-x: visible;
              max-width: 100vw;
            }
          }
        `}</style>
      </motion.div>
    </div>
  );
}
