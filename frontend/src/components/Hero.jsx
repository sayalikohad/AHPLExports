
import { Send } from "lucide-react";
import heroImage from "../assets/hero.png";

export default function Hero({ company }) {

    return (

        <section id="home" className="hero-section">

            {/* Background Image */}

            <div
                className="hero-background"
                style={{
                    backgroundImage: `url(${heroImage})`
                }}
            />

            {/* Background Overlay */}

            <div className="hero-overlay" />

            {/* Hero Content */}

            <div className="site-container hero-content">

                <div className="hero-text-wrapper">

                    <p className="hero-eyebrow hero-reveal delay-1">

                        About Company

                    </p>

                    <h1 className="hero-title hero-reveal delay-2">

                        {company?.headline ||
                            "Global Trade. Trusted Partnerships."}

                        {" "}

                        <span>

                            {company?.subheadline ||
                                "Limitless Opportunities."}

                        </span>

                    </h1>

                    <p className="hero-description hero-reveal delay-3">

                        {company?.name ||
                            "Anant Horizons Pvt. Ltd."}
                        {" "}is a trusted export company providing
                        reliable sourcing, seamless logistics,
                        and global trade solutions to help
                        businesses grow across international markets.

                    </p>

                    <div className="hero-cta hero-reveal delay-4">

                        <a href="#quote" className="quote-button">

                            Get a Quote

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

        </section>

    );
}
