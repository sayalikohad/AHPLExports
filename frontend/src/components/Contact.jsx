
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

import contactBg from "../assets/contact-bg.png";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    message: ""
};

export default function Contact() {

    const sectionRef = useRef(null);

    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");

    // Scroll Reveal Animation
    useEffect(() => {

        if (!("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }

            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    // Handle Form Inputs
    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData(previous => ({
            ...previous,
            [name]: value
        }));

    };

    // Submit Form to Java Backend
    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);
        setStatus("");
        setError("");

        try {

            const response = await fetch("/api/enquiries", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    phone: formData.phone.trim(),
                    message: formData.message.trim()
                })

            });

            if (!response.ok) {
                throw new Error(
                    "Unable to submit enquiry. Please check your details and backend connection."
                );
            }

            const data = await response.json();

            setStatus(data.message);

            setFormData(initialForm);

        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };

    return (

        <section
            id="quote"
            ref={sectionRef}
            className={`contact-section ${
                visible ? "contact-visible" : ""
            }`}
        >

            {/* Background Image */}

            <div
                className="contact-background"
                style={{
                    backgroundImage: `url(${contactBg})`
                }}
            />

            {/* Dark Blue Overlay */}

            <div className="contact-overlay" />

            <div className="site-container">

                <div className="contact-layout">

                    {/* Left Side Content */}

                    <div className="contact-content">

                        <span className="contact-label">

                            Let's Get in Touch!

                        </span>

                        <h2 className="contact-title">

                            Optimize Your Logistics
                            Today With Our Expert
                            Solutions.

                        </h2>

                    </div>

                    {/* Right Side Form */}

                    <div className="contact-form-card">

                        <h3 className="contact-form-title">

                            Get in Touch:

                        </h3>

                        <div className="contact-divider" />

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            {/* Name */}

                            <div className="contact-field">

                                <label htmlFor="contact-name">
                                    Name
                                </label>

                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    maxLength={100}
                                    required
                                />

                            </div>

                            {/* Email */}

                            <div className="contact-field">

                                <label htmlFor="contact-email">
                                    Email
                                </label>

                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    maxLength={150}
                                    required
                                />

                            </div>

                            {/* Phone */}

                            <div className="contact-field">

                                <label htmlFor="contact-phone">
                                    Phone
                                </label>

                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    maxLength={25}
                                    required
                                />

                            </div>

                            {/* Comment */}

                            <div className="contact-field">

                                <label htmlFor="contact-message">
                                    Comment
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Write your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    maxLength={2000}
                                    required
                                />

                            </div>

                            {/* Submit Button */}

                            <button
                                type="submit"
                                className="quote-button contact-submit"
                                disabled={loading}
                            >

                                {loading
                                    ? "Submitting..."
                                    : "Request a Quote"}

                                <span className="button-icon">

                                    <Send
                                        size={14}
                                        fill="currentColor"
                                    />

                                </span>

                            </button>

                            {/* Success Message */}

                            {status && (

                                <p
                                    className="contact-success"
                                    role="status"
                                >
                                    {status}
                                </p>

                            )}

                            {/* Error Message */}

                            {error && (

                                <p
                                    className="contact-error"
                                    role="alert"
                                >
                                    {error}
                                </p>

                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );
}
