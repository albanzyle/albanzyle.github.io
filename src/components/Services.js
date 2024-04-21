import React from "react";
import styles from '../styles/Services.module.css';
import completeRenovationsImage from '../assets/premium_photo-1680382578857-c331ead9ed51.avif'
import remodelingSpecialistImage from '../assets/slide1.png'
import kitchensImage from '../assets/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'
import bathroomsImage from '../assets/bathroom.avif'
import tilesImage from '../assets/tiles.avif'
import floorsImage from '../assets/floors.avif'
import woodFloorImage from '../assets/woodfloors.avif'
import stairsImage from '../assets/stairs.png'
import framingImage from '../assets/framing.png'
import sheetrocksImage from '../assets/sheetrocks.webp'
import paintingImage from '../assets/painting.avif'
import electricImage from '../assets/elestric.png'
import woodWorkImage from '../assets/woodwork.avif'
import roofingImage from '../assets/roofing.avif'
import landscapingImage from '../assets/landscape.avif'



const Services = () => {
    return (
        <div id="services" className={styles.services}>
            <h1 className={styles.heading}>Our Services</h1>
            <p className={styles.description}>Below you will find a list of the services we specialize in and offer to our clients.</p>
            <div className={styles.serviceList}>
                <ServiceItem title="Complete Renovations" image={completeRenovationsImage} />
                <ServiceItem title="Remodeling Specialist" image={remodelingSpecialistImage} />
                <ServiceItem title="Kitchens" image={kitchensImage} />
                <ServiceItem title="Bathrooms" image={bathroomsImage} />
                <ServiceItem title="Tiles" image={tilesImage} />
                <ServiceItem title="Floors" image={floorsImage} />
                <ServiceItem title="Wood Floor" image={woodFloorImage} />
                <ServiceItem title="Stairs" image={stairsImage} />
                <ServiceItem title="Framing" image={framingImage} />
                <ServiceItem title="Sheetrocks" image={sheetrocksImage} />
                <ServiceItem title="Painting" image={paintingImage} />
                <ServiceItem title="Electric" image={electricImage} />
                <ServiceItem title="All Type of Wood Work" image={woodWorkImage} />
                <ServiceItem title="Roofing" image={roofingImage} />
                <ServiceItem title="Landscaping" image={landscapingImage} />
            </div>
        </div>
    );
}

const ServiceItem = ({ title, image }) => {
    return (
        <div className={styles.serviceItem}>
            <img src={image} alt={title} className={styles.serviceImage} />
            <h2 className={styles.serviceTitle}>{title}</h2>
        </div>
    );
}

export default Services;
