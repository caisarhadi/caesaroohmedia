'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useUIStore from '../../store/uiStore'; // Changed from @/store/uiStore
import { openDrawerAnimation, closeDrawerAnimation } from '../../lib/gsap-utils'; // Changed from @/lib/gsap-utils
import gsap from 'gsap';

// Sample navigation items (can be passed as props later)
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/mapping', label: 'Mapping' },
  { href: '/insight', label: 'Insight' },
  { href: '/contact-us', label: 'Contact Us' },
];

// Breakpoint for large screens
const LG_BREAKPOINT = 1024;

const DrawerNavigation: React.FC = () => {
  const { isDrawerOpen, closeDrawer } = useUIStore();
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const prevPathnameRef = useRef(pathname);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= LG_BREAKPOINT);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Auto-close drawer when switching to large screen if it was open
  useEffect(() => {
    if (isLargeScreen && isDrawerOpen) {
      closeDrawer();
    }
  }, [isLargeScreen, isDrawerOpen, closeDrawer]);

  // Effect to update focusable elements when drawer opens
  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      const elements = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      );
      setFocusableElements(elements);
    }
  }, [isDrawerOpen]);

  // GSAP animation effect
  useEffect(() => {
    const drawerElement = drawerRef.current;
    const backdropElement = backdropRef.current;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDrawer();
      }
    };

    // Focus trapping logic with improved handling
    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && drawerElement && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    if (drawerElement) {
      if (isDrawerOpen) {
        // Store the current active element before opening drawer
        previousFocusRef.current = document.activeElement as HTMLElement;
        
        // Set initial positioning for GSAP
        gsap.set(drawerElement, { x: '-100%', visibility: 'hidden' });
        if (backdropElement) {
            gsap.set(backdropElement, { opacity: 0, display: 'none' });
        }
        
        // Start the open animation
        openDrawerAnimation(drawerElement, backdropElement, () => {
            // Focus the close button after animation completes
            closeButtonRef.current?.focus();
        });
        
        // Add keyboard event listeners
        document.addEventListener('keydown', handleEscapeKey);
        document.addEventListener('keydown', handleFocusTrap); 
      } else {
        // Start the close animation
        closeDrawerAnimation(drawerElement, backdropElement, () => {
            // Return focus to the previous element
            if (document.body.contains(previousFocusRef.current)) {
              previousFocusRef.current?.focus();
            }
        });
        
        // Remove keyboard event listeners
        document.removeEventListener('keydown', handleEscapeKey);
        document.removeEventListener('keydown', handleFocusTrap);
      }
    }

    // Cleanup function
    return () => {
      if (drawerElement) gsap.killTweensOf(drawerElement);
      if (backdropElement) gsap.killTweensOf(backdropElement);
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleFocusTrap);
    };
  }, [isDrawerOpen, closeDrawer, focusableElements]);

  // Effect to close drawer on pathname change
  useEffect(() => {
    if (isDrawerOpen && prevPathnameRef.current !== pathname) {
      closeDrawer();
    }
    // Always update prevPathname for the next render cycle for this effect
    prevPathnameRef.current = pathname; 
  }, [pathname, isDrawerOpen, closeDrawer]);

  // Skip rendering drawer components on large screens - drawer is only for mobile
  if (isLargeScreen) {
    return null;
  }
  
  return (
    <>
      <div 
        ref={backdropRef} 
        className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
        style={{ opacity: 0, display: 'none' }}
        onClick={closeDrawer}
        aria-hidden="true"
        data-testid="drawer-backdrop"
      />
      
      {/* Close button positioned at the top right of the screen */}
      {isDrawerOpen && (
        <button 
          ref={closeButtonRef}
          onClick={closeDrawer} 
          className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground border border-foreground hover:text-primary hover:border-primary transition-colors lg:hidden"
          aria-label="Close navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
      
      <aside
        ref={drawerRef}
        className="fixed top-0 left-0 h-full w-64 bg-background shadow-lg p-4 z-40 transform lg:hidden"
        style={{ visibility: 'hidden', transform: 'translateX(-100%)' }} 
        aria-labelledby="drawer-navigation-title"
        role="dialog"
        aria-modal="true"
        data-testid="drawer-panel"
      >
        <h2 id="drawer-navigation-title" className="text-xl font-semibold mb-4">Navigation</h2>
        <nav aria-label="Main navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`block py-2 px-1 rounded hover:bg-muted hover:text-primary transition-colors duration-150 ${
                    pathname === item.href
                      ? 'text-primary font-semibold'
                      : 'text-foreground'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default DrawerNavigation; 