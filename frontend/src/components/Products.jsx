
import { useEffect, useState } from "react";
import { Send } from "lucide-react";

import agricultureImage from "../assets/agriculture.png";
import spicesImage from "../assets/spices.png";
import textilesImage from "../assets/textiles.png";

const products = [
    {
        id: 1,
        title: "Agricultural Products",
        description:
            "Premium agricultural commodities sourced from trusted producers and supplied to international markets with consistent quality and reliability.",
        image: agricultureImage
    },
    {
        id: 2,
        title: "Spices & Food Products",
        description:
            "Authentic and high-quality food products and spices carefully sourced to meet global demand while maintaining freshness and quality standards.",
        image: spicesImage
    },
    {
        id: 3,
        title: "Textiles & Garments",
        description:
            "A wide selection of textile products and apparel tailored to meet the needs of wholesalers, retailers, and international buyers.",
        image: textilesImage
    },
    {
        id: 4,
        title: "Premium Saffron",
        description:
            "Carefully sourced saffron for international buyers seeking authentic flavour, quality and reliable supply.",
        image: spicesImage
    }
];

function getVisibleCards() {

    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;

    return 3;
}

export default function Products() {

    const [visibleCards, setVisibleCards] = useState(
        getVisibleCards
    );

    const [activeIndex, setActiveIndex] = useState(0);
    // const [paused, setPaused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);

    const maxIndex = Math.max(
        products.length - visibleCards,
        0
    );

    useEffect(() => {

        const handleResize = () => {

            const count = getVisibleCards();

            setVisibleCards(count);

            setActiveIndex(previous =>
                Math.min(previous, products.length - count)
            );

        };

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (
            hovered ||
            focused ||
            reducedMotion ||
            maxIndex === 0
        ) return;

        const timer = setInterval(() => {

            setActiveIndex(previous =>
                previous >= maxIndex ? 0 : previous + 1
            );

        }, 4000);

        return () => clearInterval(timer);

    }, [hovered, focused, maxIndex]);

    return (

        <section
            id="industries"
            className="products-section"
        >

            <div className="site-container">

                {/* Section Header */}

                <div className="products-header">

                    <h2 className="products-title">

                        Diverse Products. Global Markets.

                        <br className="hidden md:block" />

                        {" "}Reliable Trade Solutions.

                    </h2>

                    <a
                        href="#all-products"
                        className="quote-button products-browse"
                    >

                        Browse All

                        <span className="button-icon">
                            <Send size={13} fill="currentColor" />
                        </span>

                    </a>

                </div>

                {/* Product Slider */}

                <div
                    className="products-slider"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onFocusCapture={() => setFocused(true)}
                    onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(
                            event.relatedTarget
                        )) {
                            setFocused(false);
                        }
                    }}
                >

                    <div className="products-viewport">

                        <div
                            className="products-track"
                            style={{
                                "--visible-cards": visibleCards,
                                transform: `translateX(calc(
                                    -${activeIndex * 100 / visibleCards}%
                                    - ${activeIndex * 20 / visibleCards}px
                                ))`
                            }}
                        >

                            {products.map((product, index) => (

                                <article
                                    key={product.id}
                                    className="product-card"
                                    inert={
                                        index < activeIndex ||
                                        index >= activeIndex + visibleCards
                                    }
                                >

                                    <div className="product-card-content">

                                        <h3>{product.title}</h3>

                                        <p>{product.description}</p>

                                        <a
                                            href="#all-products"
                                            className="product-arrow"
                                            aria-label={
                                                `Explore ${product.title}`
                                            }
                                        >

                                            <Send
                                                size={17}
                                                fill="currentColor"
                                            />

                                        </a>

                                    </div>

                                    <div className="product-card-image">

                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            loading="lazy"
                                        />

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                    {/* Pagination */}

                    <div className="products-pagination">

                        {Array.from(
                            { length: maxIndex + 1 },
                            (_, index) => (

                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Show product slide ${index + 1}`}
                                    aria-pressed={index === activeIndex}
                                    onClick={() => setActiveIndex(index)}
                                    className={`product-dot ${
                                        index === activeIndex
                                            ? "active"
                                            : ""
                                    }`}
                                />

                            )
                        )}

                    </div>

                </div>

            </div>

        </section>

    );
}
