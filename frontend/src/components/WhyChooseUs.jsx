
import { useEffect, useRef, useState } from "react";

import {
    Globe,
    BadgeCheck,
    Truck,
    FileCheck,
    Handshake,
    Headset
} from "lucide-react";

const features = [
    {
        id: 1,
        icon: Globe,
        title: "Global Trade Network",
        description:
            "Trusted suppliers and buyers across international markets."
    },
    {
        id: 2,
        icon: BadgeCheck,
        title: "Quality Assurance",
        description:
            "Strict quality checks to meet global standards."
    },
    {
        id: 3,
        icon: Truck,
        title: "Reliable Logistics",
        description:
            "Smooth shipping, customs clearance, and timely delivery."
    },
    {
        id: 4,
        icon: FileCheck,
        title: "Trade Compliance",
        description:
            "Expert handling of documentation and regulations."
    },
    {
        id: 5,
        icon: Handshake,
        title: "Trusted Partnerships",
        description:
            "Long-term relationships built on transparency and trust."
    },
    {
        id: 6,
        icon: Headset,
        title: "End-to-End Support",
        description:
            "From sourcing to delivery, we manage the complete trade process."
    }
];

export default function WhyChooseUs() {

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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    return (

        <section
            id="why-choose-us"
            ref={sectionRef}
            className={`why-section ${
                visible ? "why-visible" : ""
            }`}
        >

            <div className="site-container">

                <div className="why-layout">

                    {/* Left Side Content */}

                    <div className="why-content">

                        <span className="why-label">
                            Why Choose AHPL
                        </span>

                        <h2 className="why-title">

                            Why Businesses Trust AHPL
                            for Global Trade.

                        </h2>

                        <p className="why-description">

                            At Anant Horizons Pvt. Ltd.,
                            we go beyond buying and selling
                            products. We build long-term
                            partnerships by delivering reliable
                            sourcing, quality assurance,
                            transparent processes, and seamless
                            international trade solutions that
                            help businesses grow confidently
                            across global markets.

                        </p>

                    </div>

                    {/* Right Side Cards */}

                    <div className="why-cards">

                        {features.map((feature, index) => {

                            const Icon = feature.icon;

                            return (

                                <article
                                    key={feature.id}
                                    className="why-card"
                                    style={{
                                        "--animation-delay":
                                            `${index * 100}ms`
                                    }}
                                >

                                    <div className="why-card-icon">

                                        <Icon
                                            size={22}
                                            strokeWidth={1.5}
                                            aria-hidden="true"
                                        />

                                    </div>

                                    <h3 className="why-card-title">
                                        {feature.title}
                                    </h3>

                                    <p className="why-card-description">
                                        {feature.description}
                                    </p>

                                </article>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );
}
