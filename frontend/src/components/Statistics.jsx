
import { useEffect, useRef, useState } from "react";

const statistics = [
    { value: 25, label: "Countries Served" },
    { value: 500, label: "Products Traded" },
    { value: 1000, label: "Successful Shipments" },
    { value: 100, label: "Global Clients" }
];

export default function Statistics() {

    const sectionRef = useRef(null);
    const [counts, setCounts] = useState(
        statistics.map(() => 0)
    );

    useEffect(() => {

        let animationFrame;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (!entry.isIntersecting) return;

                observer.disconnect();

                if (window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches) {
                    setCounts(statistics.map(item => item.value));
                    return;
                }

                const startTime = performance.now();
                const duration = 2000;

                function animate(currentTime) {

                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    const easeOut = 1 - Math.pow(1 - progress, 3);

                    setCounts(
                        statistics.map(item =>
                            Math.floor(item.value * easeOut)
                        )
                    );

                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(animate);
                    }

                }

                animationFrame = requestAnimationFrame(animate);

            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrame);
        };

    }, []);

    return (

        <section
            ref={sectionRef}
            className="statistics-section"
        >

            <div className="site-container">

                <h2 className="statistics-title">

                    Global Trade. Trusted Partnerships.

                    <br className="hidden sm:block" />

                    {" "}Seamless Solutions.

                </h2>

                <div className="statistics-grid">

                    {statistics.map((item, index) => (

                        <div
                            key={item.label}
                            className="statistic-item"
                        >

                            <div
                                className="statistic-number"
                                aria-hidden="true"
                            >
                                {counts[index]}+
                            </div>

                            <span className="sr-only">
                                {item.value}+
                            </span>

                            <p className="statistic-label">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}
