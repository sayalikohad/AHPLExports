import { useEffect, useRef } from "react";

import {
    ChevronRight,
    Send,
    CheckCircle2
} from "lucide-react";

import bannerImage from "../assets/about-banner.png";
import shipImage from "../assets/about-page-ship.png";
import truckImage from "../assets/about-page-truck.png";
import warehouseImage from "../assets/about-warehouse.png";
import logisticsImage from "../assets/about-logistics.png";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

const features = [
    "Global Trade Network",
    "Reliable Logistics Support",
    "Quality Assurance",
    "Competitive Pricing"
];

export default function AboutPage() {

    const pageRef = useRef(null);

    useEffect(() => {

        window.scrollTo(0, 0);

        const elements =
            pageRef.current?.querySelectorAll(".ap-reveal");

        if (!elements) return;

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ||
            !("IntersectionObserver" in window)
        ) return;

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "ap-visible"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            { threshold: 0.1 }
        );

        elements.forEach((element) => {
            element.classList.add("ap-animate");
            observer.observe(element);
        });

        return () => observer.disconnect();

    }, []);

    return (

        <div
            ref={pageRef}
            className="about-page"
        >

            {/* SECTION 1 - ABOUT BANNER */}

            <section
                className="ap-banner"
                style={{
                    backgroundImage: `url(${bannerImage})`
                }}
            >

                <div className="ap-banner-overlay" />

                <div className="ap-banner-content">

                    <h1>About Us</h1>

                    <nav
                        className="ap-breadcrumb"
                        aria-label="Breadcrumb"
                    >

                        <a href="/">Home</a>

                        <ChevronRight size={13} />

                        <span>About Us</span>

                    </nav>

                </div>

            </section>


            {/* SECTION 2 - COMPANY INTRODUCTION */}

            <section className="ap-intro-section">

                <div className="site-container">

                    <div className="ap-intro-grid">

                        {/* Left Image */}

                        <div className="ap-side-image ap-left-image ap-reveal">

                            <img
                                src={shipImage}
                                alt="International cargo ship"
                                loading="lazy"
                            />

                        </div>


                        {/* Center Content */}

                        <div className="ap-intro-content ap-reveal">

                            <span className="ap-tag">

                                Best Transportation Agency

                            </span>

                            <h2>

                                Connecting Global

                                <br />

                                Markets with{" "}

                                <span>Confidence.</span>

                            </h2>

                            <p>

                                At Ananta Horizons Pvt. Ltd.,
                                we simplify international trade
                                by providing comprehensive
                                export solutions tailored to
                                the needs of modern businesses.
                                With a strong global network of
                                suppliers, manufacturers,
                                logistics partners, and buyers,
                                we ensure efficient and
                                transparent trade operations
                                from sourcing to delivery.

                            </p>

                            <a
                                href="#ap-why-choose"
                                className="ap-button"
                            >

                                More About Us

                                <span className="ap-button-icon">

                                    <Send
                                        size={13}
                                        fill="currentColor"
                                    />

                                </span>

                            </a>

                        </div>


                        {/* Right Image */}

                        <div className="ap-side-image ap-right-image ap-reveal">

                            <img
                                src={truckImage}
                                alt="International road transportation"
                                loading="lazy"
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* SECTION 3 - WHY CHOOSE AHPL */}

            <section
                id="ap-why-choose"
                className="ap-why-section"
            >

                <div className="site-container">

                    <div className="ap-why-panel">

                        <div className="ap-why-background" />

                        {/* Left Content */}

                        <div className="ap-why-content ap-reveal">

                            <span className="ap-dark-tag">

                                Why Choose AHPL

                            </span>

                            <h2>

                                Why Businesses Trust

                                <br />

                                <span>
                                    AHPL for Global Trade.
                                </span>

                            </h2>

                            <p>

                                At Ananta Horizons Pvt. Ltd.,
                                we go beyond buying and
                                selling products. We build
                                long-term partnerships by
                                delivering reliable sourcing,
                                quality assurance, transparent
                                processes, and seamless
                                international trade solutions
                                that help businesses grow
                                confidently across global
                                markets.

                            </p>


                            {/* Features */}

                            <div className="ap-features">

                                {features.map((feature) => (

                                    <div
                                        key={feature}
                                        className="ap-feature"
                                    >

                                        <CheckCircle2
                                            size={20}
                                            className="ap-check-icon"
                                        />

                                        <span>{feature}</span>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* Right Image Collage */}

                        <div className="ap-why-images">

                            <div className="ap-warehouse-image ap-reveal">

                                <img
                                    src={warehouseImage}
                                    alt="Warehouse operations"
                                    loading="lazy"
                                />

                            </div>

                            <div className="ap-logistics-image ap-reveal">

                                <img
                                    src={logisticsImage}
                                    alt="Global logistics operations"
                                    loading="lazy"
                                />

                            </div>


                            {/* Products Badge */}

                            <div className="ap-products-badge ap-reveal">

                                <h3>500+</h3>

                                <p>Products Traded</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Certifications />
            <Contact />

        </div>

    );

}
