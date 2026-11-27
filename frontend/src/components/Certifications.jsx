
import { useEffect, useRef, useState } from "react";

import spicesBoard from "../assets/spices-board.png";
import gst from "../assets/gst.png";
import apeda from "../assets/apeda.png";
import iso from "../assets/iso.png";
import msme from "../assets/msme.png";
import fieo from "../assets/fieo.png";

const certifications = [
    {
        id: 1,
        name: "Spices Board",
        image: spicesBoard
    },
    {
        id: 2,
        name: "GST",
        image: gst
    },
    {
        id: 3,
        name: "APEDA",
        image: apeda
    },
    {
        id: 4,
        name: "ISO 9001",
        image: iso
    },
    {
        id: 5,
        name: "MSME",
        image: msme
    },
    {
        id: 6,
        name: "FIEO",
        image: fieo
    }
];

export default function Certifications() {

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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    return (

        <section
            id="certifications"
            ref={sectionRef}
            className={`certification-section ${
                visible ? "certification-visible" : ""
            }`}
        >

            <div className="site-container">

                {/* Section Heading */}

                <div className="certification-heading">

                    <span className="certification-label">
                        Certifications & Membership
                    </span>

                    <h2 className="certification-title">

                        Certified. Compliant. Trusted

                        <br className="hidden sm:block" />

                        {" "}Worldwide.

                    </h2>

                </div>

                {/* Certification Logos */}

                <div className="certification-grid">

                    {certifications.map((item, index) => (

                        <div
                            key={item.id}
                            className="certification-item"
                            style={{
                                "--animation-delay": `${index * 120}ms`
                            }}
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                                className="certification-logo"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}
