import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png'
function Possibility() {
    return (
    <section className="possibility section_padding" id="possibility">
    <div className="grid-container">
    <div className="possibility-image">
        <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h3 className="gradient_text">The possibilities are <br /> beyond your imagination</h3>
        <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
    </div>
    </div>
    </section>
    )
}

export default Possibility