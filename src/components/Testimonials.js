import React from "react";
import styles from '../styles/Testimonials.module.css';
import testimonialImage1 from '../assets/user1.webp';
import testimonialImage2 from '../assets/user2.webp';
import testimonialImage3 from '../assets/user3.webp';

const Testimonials = () => {
// Testimonials data for a construction company website
const testimonialsData = [
    {
        id: 1,
        name: "Jane Smith",
        company: "ABC Construction",
        comment: "Jane Smith provided a glowing review for our services. She mentioned how our team's attention to detail and expertise impressed her. Her project was completed smoothly, thanks to our efficient work.",
        image: testimonialImage1 // Image of Jane Smith (not shown here)
    },
    {
        id: 2,
        name: "David Johnson",
        company: "XYZ Builders",
        comment: "David Johnson appreciated our professionalism and timely delivery. He highlighted how our team went the extra mile to meet his expectations. His experience with XYZ Builders was exceptional.",
        image: testimonialImage2 // Image of David Johnson (not shown here)
    },
    {
        id: 3,
        name: "Emily Brown",
        company: "123 Contractors",
        comment: "Emily Brown praised our communication skills and project management. She found our team easy to work with and appreciated the quality of our workmanship. 123 Contractors exceeded her expectations.",
        image: testimonialImage3 // Image of Emily Brown (not shown here)
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
