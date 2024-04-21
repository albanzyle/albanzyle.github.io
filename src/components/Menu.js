import React, {useEffect, useState} from "react";
import logo1 from '../assets/slide1.png'
import logo2 from '../assets/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'
import { MdEmail } from "react-icons/md";
import { FiPhone, FiMenu  } from "react-icons/fi";
import styles from '../styles/Menu.module.css'
import { TiHome } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const handleAboutUsClick = () => {
        // Get the element you want to scroll to
        const aboutUsSection = document.getElementById("aboutUsSection");
        // Scroll to the aboutUsSection with a little offset
        aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        if(!showMenu){
            setMenuOpen(!menuOpen);
        }
        
    };
    const handleServicesClick = () => {
        // Get the element you want to scroll to
        const aboutUsSection = document.getElementById("services");
        // Scroll to the aboutUsSection with a little offset
        aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        if(!showMenu){
            setMenuOpen(!menuOpen);
        }
        
    };
    const handleTestimonialsClick = () => {
        // Get the element you want to scroll to
        const aboutUsSection = document.getElementById("testimonials");
        // Scroll to the aboutUsSection with a little offset
        aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        if(!showMenu){
            setMenuOpen(!menuOpen);
        }
        
    };
    const handleContactClick = () => {
        // Get the element you want to scroll to
        const aboutUsSection = document.getElementById("contact");
        // Scroll to the aboutUsSection with a little offset
        aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        if(!showMenu){
            setMenuOpen(!menuOpen);
        }
    };

    // Function to handle clicking on the phone icon for mobile devices
    const handlePhoneIconClick = () => {
        const phoneNumber = "(646) 330-3584"; // Phone number to copy to clipboard

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            // If mobile device, initiate phone call
            window.location.href = "tel:" + phoneNumber.replace(/\D/g, '');
        } else {
            // If not mobile device, copy to clipboard and scroll to contact section
            navigator.clipboard.writeText(phoneNumber)
                .then(() => {
                    console.log('Phone number copied to clipboard:', phoneNumber);
                    // const contactSection = document.getElementById("contact");
                    // contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                })
                .catch((error) => {
                    console.error('Failed to copy phone number:', error);
                    // Handle error if copying to clipboard fails
                });
        }
    };
    useEffect(()=>{
        if (menuOpen) {
            document.body.classList.add(styles["no-scroll"]);
        } else {
            document.body.classList.remove(styles["no-scroll"]);
        }
    },[menuOpen]);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        {!showMenu && (<div className={styles.menuButton}>
            <FiMenu onClick={toggleMenu} className={styles.iconMenu} />
            <div className={styles.logoMobile}>
                <h1>TOKA</h1>
                <h1>CONSTRUCTION</h1>
            </div>
        </div>)}
        {menuOpen && (
                <>  
                    <div onClick={toggleMenu} className={styles.blur}/>
                    <div className={styles.menuItems}>
                         <RxCross2 onClick={toggleMenu} className={styles.cross}/>
                        <h1 onClick={handleAboutUsClick}>ABOUT US</h1>
                        <hr/>
                        <h1 onClick={handleServicesClick}>SERVICES</h1>
                        <hr/>
                        <h1 onClick={handleTestimonialsClick}>TESTIMONIALS</h1>
                        <hr/>
                        <h1 onClick={handleContactClick}>CONTACT</h1>
                        <hr/>
                        <div className={styles.number}>
                            <FiPhone onClick={handlePhoneIconClick} className={styles.menuIcon}/>
                            <h1>(646) 330-3584</h1>
                        </div>
                        <hr/>
                    </div>
                </>
            )}
        {showMenu && (
                <div className={styles.menu}>
                    <div className={styles.logo}>
                        <h1>TOKA</h1>
                        <h1>CONSTRUCTION</h1>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.up}>
                            <FiPhone onClick={handlePhoneIconClick} className={styles.icon}/>
                            <h1>(646) 330-3584</h1>
                        </div>
                        <div className={styles.down}>
                            <TiHome className={styles.iconHome}/>
                            <h1 onClick={handleAboutUsClick}>ABOUT US</h1>
                            <h1 onClick={handleServicesClick}>SERVICES</h1>
                            <h1 onClick={handleTestimonialsClick}>TESTIMONIALS</h1>
                            <h1 onClick={handleContactClick}>CONTACT</h1>
                        </div>
                    </div>
                </div>
            )}

        <img className={styles.image} src={logo2}/>
        {showMenu && (<p className={styles.moto}>Your Vision, Our Expertise</p>)}
        </>
    );
}

export default Menu;
