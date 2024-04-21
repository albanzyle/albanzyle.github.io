import React, { useState } from "react";
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState("");

    // Spinner component
    const Spinner = () => (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
        </div>
    );


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // const response = await fetch('http://localhost:5000/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, telephone, message }),
            // });

            // if (response.ok) {
            //     const data = await response.json();
            //     console.log(data.message); // Log the success message
            //     setSubmitSuccess(true);
            //     // Reset form fields
            //     setName("");
            //     setEmail("");
            //     setTelephone("");
            //     setMessage("");
            //     setError(""); // Clear any previous errors
            // } else {
            //     // Handle specific error scenarios if needed
            //     console.error('Failed to submit form');
            //     setError("Failed to submit form. Please try again later.");
            // }
                        //     setSubmitSuccess(true);
            // Reset form fields
            setName("");
            setEmail("");
            setTelephone("");
            setMessage("");
            setError(""); // Clear any previous errors
        } catch (error) {
            console.error('Error submitting form:', error);
            setError("Error submitting form. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div id="contact" className={styles.contact}>
            <h1 className={styles.heading}>Contact Us</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />
                <input
                    type="tel"
                    placeholder="Your Telephone Number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    required
                    className={styles.input}
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={styles.textarea}
                ></textarea>
                <button type="submit" className={styles.button} disabled={submitting}>
                    {submitting ? <Spinner /> : 'Submit'}
                </button>
                
                {error && <p className={styles.errorMessage}>{error}</p>}
            </form>
        </div>
    );
}

export default Contact;
