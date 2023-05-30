import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    When using any of our products or interacting with themoviedb.org which is owned and operated by Xperi Inc., or any of our subsidiaries or affiliates that link to this Privacy Policy (collectively, "TMDB," "we," "our", or "us") that do not have a separate privacy policy, you consent to the collection, transfer, storage, processing, disclosure and use of your information as described in this Privacy Policy. This includes any information you choose to provide that is deemed sensitive under applicable law. If you do not agree with the terms of this Privacy Policy, you should not use TMDB products (a TMDB account or API access), or access or interact with any other aspect of TMDB's business.

                    We collect and process data that we use to provide you with TMDB products, notify you of changes to our policies or products, identify or troubleshoot issues, conduct surveys, improve the products we provide to you, market and advertise our products including providing advertising to you, and otherwise operate our business. Your rights to your personal data and its collection and use are outlined in this policy.

                    If you have a disability and need this policy provided to you in a different format, please email privacy@xperi.com.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
