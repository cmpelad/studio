
"use client";

import { useEffect, useContext }  from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { GlobalContext } from './AppInitializer'; 

export default function PageClientLogic() {
  const context = useContext(GlobalContext);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    if (!context) return;

    // Only run scroll/hash logic if on the homepage
    if (pathname === '/') {
      const setActiveNavLinkBasedOnScroll = () => {
        let currentSectionId = '';
        const sections = document.querySelectorAll<HTMLElement>('main section[id]');
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const headerHeightStyle = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
        const headerHeight = headerHeightStyle ? parseFloat(headerHeightStyle) : 75; 
        const offset = headerHeight + 150;

        sections.forEach(section => {
          if (section.offsetTop <= scrollPosition + offset && section.offsetTop + section.offsetHeight > scrollPosition + offset) {
            currentSectionId = section.id;
          }
        });

        let activeHash = '';
        if (currentSectionId) {
          activeHash = `/#${currentSectionId}`;
        } else if (sections.length > 0 && scrollPosition < (sections[0].offsetTop - offset)) {
          activeHash = '/#hero'; 
        } else {
          const currentActive = document.querySelector('.main-nav a.active:not(.registration-trigger):not([target="_blank"])');
          if (currentActive) {
              activeHash = currentActive.getAttribute('href') || '/#hero';
          } else {
              activeHash = '/#hero';
          }
        }
        
        document.querySelectorAll('.main-nav a:not(.registration-trigger):not([target="_blank"])').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === activeHash) {
            link.classList.add('active');
          }
        });

        const heroLink = document.querySelector('.main-nav a[href="/#hero"]:not([target="_blank"])');
        if (!document.querySelector('.main-nav a.active:not(.registration-trigger):not([target="_blank"])') && heroLink) {
          heroLink.classList.add('active');
        }
      };
      
      const setActiveNavLinkOnLoadOrHashChange = () => {
        const currentHash = window.location.hash ? `/${window.location.hash}` : '/#hero';
        const navLinks = document.querySelectorAll('.main-nav a:not(.registration-trigger):not([target="_blank"])');
        navLinks.forEach(link => link.classList.remove('active'));
        
        const activeLink = document.querySelector(`.main-nav a[href="${currentHash}"]:not([target="_blank"])`) || document.querySelector('.main-nav a[href="/#hero"]:not([target="_blank"])');
        if (activeLink) {
          activeLink.classList.add('active');
        } else if (navLinks.length > 0 && navLinks[0].getAttribute('href')?.startsWith('/#')) {
          navLinks[0].classList.add('active');
        }
      };

      setActiveNavLinkOnLoadOrHashChange();
      setActiveNavLinkBasedOnScroll(); 

      window.addEventListener('hashchange', setActiveNavLinkOnLoadOrHashChange);
      window.addEventListener('scroll', setActiveNavLinkBasedOnScroll, { passive: true });

      return () => {
        window.removeEventListener('hashchange', setActiveNavLinkOnLoadOrHashChange);
        window.removeEventListener('scroll', setActiveNavLinkBasedOnScroll);
      };
    } else {
      // If not on homepage, ensure no hash-based links are active, except specific page links
      document.querySelectorAll('.main-nav a:not(.registration-trigger):not([target="_blank"])').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === pathname) { // Activate if link matches current path
            link.classList.add('active');
        }
      });
    }
  }, [context, pathname]); // Re-run effect if pathname changes

  return null;
}
