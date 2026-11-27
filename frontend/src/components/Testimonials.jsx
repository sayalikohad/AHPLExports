
import { useEffect, useRef, useState } from "react";

// Sample customer testimonials
const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Business Owner",
        review:
            "AHPL has been a dependable trade partner for our business. Their commitment to quality and timely shipments has helped us streamline our procurement process.",
        initials: "RS"
    },
    {
        id: 2,
        name: "Mohit Singh",
        role: "Purchasing Head",
        review:
            "Their attention to quality control and supplier verification gives us complete confidence in every shipment we receive.",
        initials: "MS"
    },
    {
        id: 3,
        name: "Priya Verma",
        role: "Operations Manager",
        review:
            "From documentation to logistics management, AHPL handled every aspect professionally, making international trade simple and efficient.",
        initials: "PV"
    },
    {
        id: 4,
        name: "Sneha Kulkarni",
        role: "Business Owner – USA",
        review:
            "Competitive pricing, transparent communication, and consistent service make AHPL one of our most valued sourcing partners.",
        initials: "SK"
    },
    {
        id: 5,
        name: "Amit Desai",
        role: "Import Partner",
        review:
            "The team is highly professional and responsive. Their sourcing network helped us find the right products without delays.",
        initials: "AD"
    },
    {
        id: 6,
        name: "Neha Joshi",
        role: "Supply Chain Lead",
        review:
            "We appreciate the transparency, regular updates, and smooth execution across every stage of the export process.",
        initials: "NJ"
    }
];

// Responsive card count
function getVisibleCards() {

    if (window.innerWidth < 640) return 1;

    if (window.innerWidth < 1024) return 2;

    return 4;
}

export default function Testimonials() {

    const sectionRef = useRef(null);

    const [visible, setVisible] = useState(false);

    const [visibleCards, setVisibleCards] =
        useState(getVisibleCards);

    const [activeIndex, setActiveIndex] =
        useState(0);

    const [hovered, setHovered] =
        useState(false);

    const [focused, setFocused] =
        useState(false);

    const [reducedMotion, setReducedMotion] =
        useState(() =>
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        );

    const maxIndex = Math.max(
        testimonials.length - visibleCards,
        0
    );

    // Scroll reveal animation
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

    // Responsive resize handling
    useEffect(() => {

        const handleResize = () => {

            const count = getVisibleCards();

            setVisibleCards(count);

            setActiveIndex((previous) =>
                Math.min(
                    previous,
                    Math.max(
                        testimonials.length - count,
                        0
                    )
                )
            );

        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () =>
            window.removeEventListener(
                "resize",
                handleResize
            );

    }, []);

    // Reduced motion preference
    useEffect(() => {

        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const handleMotionChange = (event) => {

            setReducedMotion(event.matches);

        };

        mediaQuery.addEventListener(
            "change",
            handleMotionChange
        );

        return () =>
            mediaQuery.removeEventListener(
                "change",
                handleMotionChange
            );

    }, []);

    // Automatic testimonial slider
    useEffect(() => {

        if (
            maxIndex === 0 ||
            hovered ||
            focused ||
            reducedMotion ||
            !visible
        ) {
            return;
        }

        const timer = setInterval(() => {

            setActiveIndex((previous) =>
                previous >= maxIndex
                    ? 0
                    : previous + 1
            );

        }, 4000);

        return () => clearInterval(timer);

    }, [
        maxIndex,
        hovered,
        focused,
        reducedMotion,
        visible
    ]);

    return (

        <section
            id="testimonials"
            ref={sectionRef}
            className={`testimonials-section ${
                visible ? "testimonials-visible" : ""
            }`}
            aria-labelledby="testimonials-title"
        >

            <div className="site-container">

                {/* Section Heading */}

                <div className="testimonials-heading">

                    <span className="testimonials-label">

                        Customer Testimonials

                    </span>

                    <h2
                        id="testimonials-title"
                        className="testimonials-title"
                    >

                        Trusted by Businesses Across

                        <br className="hidden md:block" />

                        {" "}Global Markets.

                    </h2>

                    <p className="testimonials-description">

                        We take pride in building lasting
                        relationships with clients worldwide.
                        Here's what our partners have to say
                        about their experience working with
                        Anant Horizons Pvt. Ltd.

                    </p>

                </div>

                {/* Testimonial Slider */}

                <div
                    className="testimonials-slider"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onFocusCapture={() => setFocused(true)}
                    onBlurCapture={(event) => {

                        if (
                            !event.currentTarget.contains(
                                event.relatedTarget
                            )
                        ) {

                            setFocused(false);

                        }

                    }}
                >

                    <div className="testimonials-viewport">

                        <div
                            className="testimonials-track"
                            style={{

                                "--visible-cards": visibleCards,

                                transform: `translateX(calc(
                                    -${activeIndex * 100 / visibleCards}%
                                    - ${activeIndex * 20 / visibleCards}px
                                ))`

                            }}
                        >

                            {testimonials.map((item, index) => (

                                <article
                                    key={item.id}
                                    className="testimonial-card"
                                    inert={
                                        index < activeIndex ||
                                        index >= activeIndex + visibleCards
                                    }
                                    style={{
                                        "--animation-delay":
                                            `${index * 100}ms`
                                    }}
                                >

                                    {/* Star Rating */}

                                    <div
                                        className="testimonial-stars"
                                        aria-label="5 out of 5 stars"
                                    >

                                        ★★★★★

                                    </div>

                                    {/* Customer Review */}

                                    <p className="testimonial-review">

                                        {item.review}

                                    </p>

                                    {/* Customer Profile */}

                                    <div className="testimonial-user">

                                        <div
                                            className="testimonial-avatar"
                                            aria-hidden="true"
                                        >

                                            {item.initials}

                                        </div>

                                        <div className="testimonial-user-info">

                                            <h3>
                                                {item.name}
                                            </h3>

                                            <span>
                                                {item.role}
                                            </span>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                    {/* Pagination Dots */}

                    {maxIndex > 0 && (

                        <div
                            className="testimonials-dots"
                            role="group"
                            aria-label="Testimonial pagination"
                        >

                            {Array.from(

                                { length: maxIndex + 1 },

                                (_, index) => (

                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={
                                            `Go to testimonial slide ${index + 1}`
                                        }
                                        aria-pressed={
                                            index === activeIndex
                                        }
                                        className={`testimonial-dot ${
                                            index === activeIndex
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setActiveIndex(index)
                                        }
                                    />

                                )

                            )}

                        </div>

                    )}

                </div>

            </div>

        </section>

    );
}
