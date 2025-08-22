
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; 
import './Navbar.css';

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectRef = useRef(null);
  const menuRef = useRef(null); // NEW: for detecting clicks outside
  const location = useLocation();

  const labels = {
    en: {
      home: 'Home',
      contents: 'List of Contents',
      author: 'About the Author',
      contact: 'Contact',
      urdu: 'Urdu',
      english: 'English',
    },
    ur: {
      home: 'آغاز',
      contents: 'فہرست مواد',
      author: 'مصنف کا تعارف',
      contact: 'رابطہ',
      urdu: 'اردو',
      english: 'انگریزی',
    },
  };

  const currentLabels = labels[language];

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  // Close menu on route change
  useEffect(() => {
    if (selectRef.current) selectRef.current.blur();
    setIsMenuOpen(false); 
  }, [location.pathname]);

  // NEW: close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar">
      <img src="/name.jpg" alt="Logo" className="nav-logo" />

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NEW: ref added here */}
      <div ref={menuRef} className={`nav-links-wrapper ${isMenuOpen ? 'show' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active-nav' : 'nav-item')}>
          {currentLabels.home}
        </NavLink>

        <NavLink to="/contents" end className={({ isActive }) => (isActive ? 'nav-item active-nav' : 'nav-item')}>
          {currentLabels.contents}
        </NavLink>

        <NavLink to="/author" className={({ isActive }) => (isActive ? 'nav-item active-nav' : 'nav-item')}>
          {currentLabels.author}
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active-nav' : 'nav-item')}>
          {currentLabels.contact}
        </NavLink>

        <div className="language-selector-wrapper">
          <FaChevronDown className="chevron-icon" />
          <select
            className="language-selector"
            value={language}
            ref={selectRef}
            onChange={handleChange}
          >
            <option value="en">{currentLabels.english}</option>
            <option value="ur">{currentLabels.urdu}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
