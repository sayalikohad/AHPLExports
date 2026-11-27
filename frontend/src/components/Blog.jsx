
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

// Blog Images
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const blogPosts = [
    {
        id: 1,
        title: "A Complete Guide to Export Documentation",
        description:
            "Understanding essential trade documents such as commercial invoices, bills of lading, certificates of origin, and customs paperwork for smooth international transactions.",
        image: blog1,
        link: "#"
    },
    {
        id: 2,
        title: "Top Emerging Markets for Export Businesses in 2026",
        description:
            "Discover high-growth international markets and new opportunities for businesses looking to expand their global footprint.",
        image: blog2,
        link: "#"
    },
    {
        id: 3,
        title: "How to Choose the Right Global Sourcing Partner",
        description:
            "Learn the key factors to consider when selecting reliable suppliers and sourcing partners for long-term business success.",
        image: blog3,
        link: "#"
    }
];

export default function Blog() {

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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

    return (

        <section
            id="blog"
            ref={sectionRef}
            className={`blog-section ${
                visible ? "blog-visible" : ""
            }`}
        >

            <div className="site-container">

                {/* Section Heading */}

                <div className="blog-heading">

                    <span className="blog-label">
                        Latest Blog
                    </span>

                    <h2 className="blog-title">

                        Read Our Latest Insights From

                        <br className="hidden md:block" />

                        {" "}Update Blog

                    </h2>

                </div>

                {/* Blog Cards */}

                <div className="blog-grid">

                    {blogPosts.map((post, index) => (

                        <article
                            key={post.id}
                            className="blog-card"
                            style={{
                                "--blog-delay": `${index * 120}ms`
                            }}
                        >

                            <div className="blog-image-wrap">

                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="blog-image"
                                    loading="lazy"
                                />

                            </div>

                            <div className="blog-card-content">

                                <h3 className="blog-card-title">
                                    {post.title}
                                </h3>

                                <p className="blog-card-description">
                                    {post.description}
                                </p>

                                <a
                                    href={post.link}
                                    className="blog-read-more"
                                    aria-label={`Read more about ${post.title}`}
                                >

                                    View More

                                    <ArrowRight
                                        size={15}
                                        strokeWidth={1.8}
                                    />

                                </a>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );
}
