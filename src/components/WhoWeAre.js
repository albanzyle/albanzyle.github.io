import React from "react";
import styles from '../styles/WhoWeAre.module.css';

const WhoWeAre = () => {
    return (
            <>
                <div id="aboutUsSection" className={styles.background}/>
                <div className={styles.container}>
                    <h1 className={styles.heading}>Welcome to Toka Construction!</h1>
                    <p className={styles.description}>Our goal at Toka Construction is to provide each client with the highest quality project with the best design principles in mind. Custom projects are our specialty. We pride ourselves on attention to detail and our clients can expect individual attention from our staff.</p>
                    <div className={styles.highlights}>
                        <div className={styles.highlight}>
                            <h2 className={styles.highlightHeading}>Quality Workmanship</h2>
                            <p className={styles.highlightDescription}>We are committed to delivering projects of exceptional quality, ensuring every detail is meticulously crafted.</p>
                        </div>
                        <div className={styles.highlight}>
                            <h2 className={styles.highlightHeading}>Custom Solutions</h2>
                            <p className={styles.highlightDescription}>We tailor our services to meet the unique needs and preferences of each client, offering customized solutions.</p>
                        </div>
                        <div className={styles.highlight}>
                            <h2 className={styles.highlightHeading}>Client-Centric Approach</h2>
                            <p className={styles.highlightDescription}>Our clients are at the heart of everything we do. We prioritize open communication and strive to exceed expectations.</p>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default WhoWeAre;
