import React from 'react'
import './Brand.css'
import { google, slack, atlassian, dropbox, shopify } from './Import';
const Brand = () => (
    <div className="brand section_padding">
    <div>
        <img src={google} alt="img1" />
    </div>
    <div>
        <img src={slack} alt="img2" />
    </div>
    <div>
        <img src={atlassian} alt="img3" />
    </div>
    <div>
        <img src={dropbox} alt="img4" />
    </div>
    <div>
        <img src={shopify} alt="img5" />
    </div>
    </div>
    );

export default Brand