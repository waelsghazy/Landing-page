
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-links">
        <div className="navbar-links_logo">
            <img src={logo} alt='logo' />
        </div>
        <div className="navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </div>
        </div>
        <div className="navbar-sign">
        <button type="button" className='signin'>Sign up</button>
        <button type="button" className='signup'>Sign up</button>
        </div>
        <div className="navbar-menu">
        {toggleMenu
            ? <RiCloseLine color="#fff" size={28} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={28} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
            </div>
            <div className="navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
            </div>
        </div>
        )}
        </div>
    </nav>
    );
};

export default Navbar;