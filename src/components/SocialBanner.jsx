import React, { Fragment } from "react";
import '../styles/socialBanner.css';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';

const SocialBanner = () => {
    return(
        <div className="social-banner">
            <div className="title"><h4>@HUSHPUPPIESCO</h4></div>
            <div className="icons">
            <a href="#"><img src={facebookIcon} alt="img"></img></a>
            <a href="#"><img src={instagramIcon} alt="img"></img></a>
            </div>
        </div>
    )
}

export default SocialBanner;