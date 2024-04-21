import React from "react";
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaFacebook /></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaTwitter /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaInstagram /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaLinkedin /></a>
            </div>
            <p className={styles.copy}>© 2024 Toka Construction. All rights reserved.</p>
            <p className={styles.contactInfo}>
                Tel: (646) 330-3584 | Fax: (347) 597-5615 | Email: adrian@tokaconstruction.com | Web: www.tokaconstruction.com
            </p>
            {/* <p className={styles.contactInfo}>
                Tel: (646) 330-3584 | Fax: (347) 597-5615
            </p>
            <p className={styles.contactInfo}>
                Email: adrian@tokaconstruction.com 
            </p>
            <p className={styles.contactInfo}>
                Web: www.tokaconstruction.com
            </p> */}
        </footer>
    );
}

export default Footer;
