
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

import logo from "../assets/logo-white.png";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#industries" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" }
];

const categories = [
    "Agricultural Products",
    "Spices & Food Products",
    "Textiles & Garments",
    "Industrial Materials",
    "Chemicals & Raw Materials",
    "Packaging Solutions",
    "Consumer Goods",
    "Engineering Products",
    "Customized Sourcing"
];

const contact = {
    address: "Nagpur, Maharashtra, India",
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: ""
};

// Facebook Icon
function FacebookIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v9h4v-9h3l1-4h-4V9c0-.7.3-1 1-1z" />
        </svg>
    );
}

// Instagram Icon
function InstagramIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
            />

            <circle cx="12" cy="12" r="4" />

            <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
}

// LinkedIn Icon
function LinkedinIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <circle cx="5" cy="5" r="2" />

            <path d="M3 9h4v12H3zM10 9h4v2c1-2 3-2.5 4-2.5 3 0 4 2 4 5V21h-4v-7c0-1.5-.5-2-2-2s-2 1-2 2v7h-4z" />
        </svg>
    );
}

// X Icon
function XIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.6L5.2 22H2l7.4-8.5L1.8 2h6.5l4.6 7zM17.8 20h1.7L7.3 4H5.5z" />
        </svg>
    );
}

export default function Footer() {

    const footerRef = useRef(null);
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

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();

    }, []);

    const socialLinks = [
        {
            name: "Facebook",
            icon: <FacebookIcon />,
            className: "social-facebook",
            href: contact.facebook
        },
        {
            name: "Instagram",
            icon: <InstagramIcon />,
            className: "social-instagram",
            href: contact.instagram
        },
        {
            name: "LinkedIn",
            icon: <LinkedinIcon />,
            className: "social-linkedin",
            href: contact.linkedin
        },
        {
            name: "X",
            icon: <XIcon />,
            className: "social-twitter",
            href: contact.twitter
        }
    ];

    return (

        <footer
            id="contact"
            ref={footerRef}
            className={`footer-section ${
                visible ? "footer-visible" : ""
            }`}
        >

            <div className="site-container">

                <div className="footer-grid">

                    {/* Column 1 - About Company */}

                    <div className="footer-company footer-reveal">

                        <a href="#home">

                            <img
                                src={logo}
                                alt="AHPL Global Trade Partner"
                                className="footer-logo"
                            />

                        </a>

                        <h3 className="footer-about-title">
                            About Company.
                        </h3>

                        <p className="footer-description">

                            Anant Horizons Pvt. Ltd. helps
                            businesses grow globally with
                            trusted export, sourcing, and
                            logistics services.

                        </p>

                        <div className="footer-socials">

                            {socialLinks.map((social) => {

                                const className =
                                    `footer-social-icon ${social.className}`;

                                return social.href ? (

                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={className}
                                    >
                                        {social.icon}
                                    </a>

                                ) : (

                                    <span
                                        key={social.name}
                                        title={social.name}
                                        className={className}
                                    >
                                        {social.icon}
                                    </span>

                                );

                            })}

                        </div>

                    </div>

                    {/* Column 2 - Quick Links */}

                    <div className="footer-column footer-reveal footer-delay-1">

                        <h3>Quick Links</h3>

                        <ul>

                            {quickLinks.map((link) => (

                                <li key={link.name}>

                                    <a href={link.href}>
                                        {link.name}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Column 3 - Product Categories */}

                    <div className="footer-column footer-reveal footer-delay-2">

                        <h3>Product Categories</h3>

                        <ul>

                            {categories.map((category) => (

                                <li key={category}>

                                    <a href="#industries">
                                        {category}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Column 4 - Contact */}

                    <div className="footer-column footer-reveal footer-delay-3">

                        <h3>Contact</h3>

                        <div className="footer-contact">

                            <h4>Operational Address:</h4>

                            <div className="footer-address">

                                <MapPin size={17} />

                                <p>{contact.address}</p>

                            </div>

                            <a
                                href={
                                    contact.phone
                                        ? `tel:${contact.phone.replace(/\s/g, "")}`
                                        : undefined
                                }
                                className="footer-contact-link"
                            >

                                <Phone size={16} />

                                <span>
                                    {contact.phone || "Phone Number"}
                                </span>

                            </a>

                            <a
                                href={
                                    contact.email
                                        ? `mailto:${contact.email}`
                                        : undefined
                                }
                                className="footer-contact-link"
                            >

                                <Mail size={17} />

                                <span>
                                    {contact.email || "Email Address"}
                                </span>

                            </a>

                        </div>

                    </div>

                </div>

                {/* Footer Bottom */}

                <div className="footer-bottom">

                    <div className="footer-policy-links">

                        <a href="#privacy-policy">
                            Privacy Policy
                        </a>

                        <a href="#terms">
                            Terms & Conditions
                        </a>

                    </div>

                    <p className="footer-copyright">

                        © {new Date().getFullYear()} AHPL.
                        All Rights Reserved.
                        {" "}Site Design and Maintained by{" "}
                        <span>AHPL Solutions.</span>

                    </p>

                </div>

            </div>

        </footer>

    );
}
