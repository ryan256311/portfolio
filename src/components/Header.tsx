import React, { useState, useEffect } from 'react'; // Import useEffect
import { FiMenu, FiX } from 'react-icons/fi';
import MenuNavLink from './MenuNavLink'; // Import MenuNavLink

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(''); // State to store current hash

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Run only once on mount

  const isHomePage = currentHash === '#/' || currentHash === '';

  const menuItems = [
    { href: '#works', label: 'Works', showOnHome: true },
    { href: '#about', label: 'About', showOnHome: true },
  ];

  return (
    <header className="p-4 fixed top-[3vw] right-[2vw] z-50">
      <nav className="flex justify-end">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 gap-12">
          {menuItems.map(item => {
            const isWorksPage = currentHash.startsWith('#works');
            const isAboutPage = currentHash.startsWith('#about');

            let shouldHide = false;
            if (item.href === '#home') { // Home link management
                if (isHomePage) shouldHide = true;
            } else if (item.href === '#works') { // Works link management
                if (isWorksPage && !isHomePage) shouldHide = true; // Hide Works link if on Works page (and not Home)
            } else if (item.href === '#about') { // About link management
                if (isAboutPage && !isHomePage) shouldHide = true; // Hide About link if on About page (and not Home)
            }

            if (shouldHide) {
              return null;
            }
            return (
              <li key={item.href}>
                <MenuNavLink href={item.href} label={item.label} />
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          {menuItems.map(item => {
            const isWorksPage = currentHash.startsWith('#works');
            const isAboutPage = currentHash.startsWith('#about');

            let shouldHide = false;
            if (item.href === '#home') { // Home link management
                if (isHomePage) shouldHide = true;
            } else if (item.href === '#works') { // Works link management
                if (isWorksPage && !isHomePage) shouldHide = true; // Hide Works link if on Works page (and not Home)
            } else if (item.href === '#about') { // About link management
                if (isAboutPage && !isHomePage) shouldHide = true; // Hide About link if on About page (and not Home)
            }

            if (shouldHide) {
              return null;
            }
            return (
              <li key={item.href}>
                <MenuNavLink href={item.href} label={item.label} onClick={() => setIsOpen(false)} />
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Header;
