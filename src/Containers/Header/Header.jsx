import React from "react";
import "./Header.css";
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
function Header() {
    return (
        <div className="header section_padding" id="home">
        <div className="grid-container">
        <div className="header-content">
            <h1 className="gradient_text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
            <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
                Indulgence way everything joy alteration boisterous the attachment. 
                Party we years to order allow asked of.
            </p>
            <div className="header-content_input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
            </div>
            <div className="header-content_people">
            <img src={people} />
            <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className="header-image">
            <img src={ai} />
        </div>
        </div>
        </div>
    );
}

export default Header;
