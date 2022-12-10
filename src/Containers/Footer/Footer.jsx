import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg';
function Footer() {
    return (
        <section className='footer section_padding' id='footer'>
            <div className="footer-heading">
                <h3 className="gradient_text">Do you want to step in to the <br /> future before others</h3>
            </div>
            <div className="footer-btn">
                <p>Request Early Access</p>
            </div>
    <div className="footer-content">
        <div className="footer-links_logo">
        <img src={logo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="footer-links">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
        </div>
        <div className="footer-links">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        </div>
        <div className="footer-links">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
        </div>
    </div>
    <div className="footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
    </div>
        </section>
    )
}

export default Footer