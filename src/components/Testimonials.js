import React from "react";
import styles from '../styles/Testimonials.module.css';
import testimonialImage1 from '../assets/user1.webp';
import testimonialImage2 from '../assets/user2.webp';
import testimonialImage3 from '../assets/user3.webp';

const Testimonials = () => {
    // Dummy data for testimonials
    const testimonialsData = [
        {
            id: 1,
            name: "John Doe",
            company: "ABC Construction",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum felis quis risus luctus, id laoreet elit eleifend. Donec euismod urna in erat finibus, sed malesuada velit interdum.",
            image: testimonialImage1
        },
        {
            id: 2,
            name: "Jane Smith",
            company: "XYZ Builders",
            comment: "Nullam vitae est a risus pharetra elementum. Aliquam vel ante quis mi volutpat fermentum. Curabitur quis neque elit.",
            image: testimonialImage2
        },
        {
            id: 3,
            name: "David Johnson",
            company: "123 Contractors",
            comment: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut sollicitudin metus.",
            image: testimonialImage3
        }
    ];

    return (
        <div id="testimonials" className={styles.testimonials}>
            <h1 className={styles.heading}>Testimonials</h1>
            <div className={styles.testimonialsList}>
                {testimonialsData.map(testimonial => (
                    <Testimonial key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
}

const Testimonial = ({ testimonial }) => {
    const { name, company, comment, image } = testimonial;

    return (
        <div className={styles.testimonial}>
            <img src={image} alt={name} className={styles.testimonialImage} />
            <p className={styles.comment}>{comment}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.company}>{company}</p>
        </div>
    );
}

export default Testimonials;
