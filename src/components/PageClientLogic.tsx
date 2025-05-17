
"use client";

import { useEffect, useContext }  from 'react';
import { GlobalContext } from './AppInitializer'; // Assuming AppInitializer provides this context

export default function PageClientLogic() {
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (!context) return;

    const setActiveNavLinkBasedOnScroll = () => {
      let currentSectionId = '';
      const sections = document.querySelectorAll<HTMLElement>('main section[id]');
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const headerHeightStyle = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
      const headerHeight = headerHeightStyle ? parseFloat(headerHeightStyle) : 75; // Default from CSS
      const offset = headerHeight + 150;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition + offset && section.offsetTop + section.offsetHeight > scrollPosition + offset) {
          currentSectionId = section.id;
        }
      });

      let activeHash = '';
      if (currentSectionId) {
        activeHash = `#${currentSectionId}`;
      } else if (sections.length > 0 && scrollPosition < (sections[0].offsetTop - offset)) {
        activeHash = '#hero'; // Default to hero if above all sections
      } else {
        // Fallback if no section is matched (e.g. scrolled to bottom past last section)
        // Try to keep current active or default to hero
        const currentActive = document.querySelector('.main-nav a.active:not(.registration-trigger):not([target="_blank"])');
        if (currentActive) {
            activeHash = currentActive.getAttribute('href') || '#hero';
        } else {
            activeHash = '#hero';
        }
      }
      
      document.querySelectorAll('.main-nav a:not(.registration-trigger):not([target="_blank"])').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHash) {
          link.classList.add('active');
        }
      });

      // Ensure hero is active if nothing else is
      const heroLink = document.querySelector('.main-nav a[href="#hero"]:not([target="_blank"])');
      if (!document.querySelector('.main-nav a.active:not(.registration-trigger):not([target="_blank"])') && heroLink) {
        heroLink.classList.add('active');
      }
    };
    
    const setActiveNavLinkOnLoadOrHashChange = () => {
      const currentHash = window.location.hash || '#hero';
      const navLinks = document.querySelectorAll('.main-nav a:not(.registration-trigger):not([target="_blank"])');
      navLinks.forEach(link => link.classList.remove('active'));
      
      const activeLink = document.querySelector(`.main-nav a[href="${currentHash}"]:not([target="_blank"])`) || document.querySelector('.main-nav a[href="#hero"]:not([target="_blank"])');
      if (activeLink) {
        activeLink.classList.add('active');
      } else if (navLinks.length > 0 && navLinks[0].getAttribute('href')?.startsWith('#')) {
        // Fallback to first nav link if currentHash doesn't match anything and hero also doesn't match
        navLinks[0].classList.add('active');
      }
    };

    // Initial call
    setActiveNavLinkOnLoadOrHashChange();
    setActiveNavLinkBasedOnScroll(); // Also call on load in case of direct scroll position

    window.addEventListener('hashchange', setActiveNavLinkOnLoadOrHashChange);
    window.addEventListener('scroll', setActiveNavLinkBasedOnScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', setActiveNavLinkOnLoadOrHashChange);
      window.removeEventListener('scroll', setActiveNavLinkBasedOnScroll);
    };
  }, [context]);

  return null; // This component does not render anything itself
}

    