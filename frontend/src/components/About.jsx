
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

import mainImage from "../assets/about-main.png";
import shipImage from "../assets/about-ship.png";
import cargoImage from "../assets/about-cargo.png";
import truckImage from "../assets/about-truck.png";
import containerImage from "../assets/about-container.png";

export default function About({ company }) {

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }

            },
            {
                threshold: 0.15
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    return (

        <section
            id="about"
            ref={sectionRef}
            className={`about-section
                ${visible ? "about-visible" : ""}`}
        >

            {/* Decorative Container */}

            <img
                src={containerImage}
                alt=""
                aria-hidden="true"
                className="about-decoration-container"
            />

            <div className="site-container about-grid">

                {/* Left Image Collage */}

                <div className="about-image-wrapper">

                    {/* Main Image */}

                    <div className="about-main-image">

                        <img
                            src={mainImage}
                            alt="International air and road logistics"
                            loading="lazy"
                        />

                    </div>

                    {/* Top Right Ship Image */}

                    <div className="about-ship-image">

                        <img
                            src={shipImage}
                            alt="International cargo ship"
                            loading="lazy"
                        />

                    </div>

                    {/* Bottom Right Cargo Image */}

                    <div className="about-cargo-image">

                        <img
                            src={cargoImage}
                            alt="Container shipping and export"
                            loading="lazy"
                        />

                    </div>

                    {/* Experience Badge */}

                    <div className="about-experience">

                        <h3>10+</h3>

                        <p>Years of Experience</p>

                    </div>

                </div>

                {/* Right Content */}

                <div className="about-content">

                    <p className="about-eyebrow about-reveal about-delay-1">

                        About Company

                    </p>

                    <h2 className="about-title about-reveal about-delay-2">

                        Connecting Global Markets
                        with Confidence.

                    </h2>

                    <div className="about-description about-reveal about-delay-3">

                        <p>

                            At {company?.name ||
                            "Ananta Horizons Pvt. Ltd."},
                            we simplify international trade
                            by providing comprehensive export
                            solutions tailored to the needs
                            of modern businesses. With a strong
                            global network of suppliers,
                            manufacturers, logistics partners,
                            and buyers, we ensure efficient
                            and transparent trade operations
                            from sourcing to delivery.

                        </p>

                        <p>

                            Whether you are looking to expand
                            your business into international
                            markets, {company?.name ||
                            "Ananta Horizons Pvt. Ltd."}
                            {" "}serves as your trusted partner
                            for reliable and profitable trade.

                        </p>

                    </div>

                    {/* CTA Button */}

                    <div className="about-cta about-reveal about-delay-4">

                        <a
                            href="#company-details"
                            className="quote-button"
                        >

                            More About Us

                            <span className="button-icon">

                                <Send
                                    size={14}
                                    fill="currentColor"
                                />

                            </span>

                        </a>

                    </div>

                </div>

            </div>

            {/* Decorative Truck */}

            <img
                src={truckImage}
                alt=""
                aria-hidden="true"
                className="about-decoration-truck"
                loading="lazy"
            />

        </section>

    );
}
