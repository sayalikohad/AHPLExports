
import { useEffect, useRef, useState } from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Phone,
    Mail,
    MapPin
} from "lucide-react";

import logo from "../assets/logo.png";

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

// Replace empty values with actual company details
const contact = {
    address: "Nagpur, Maharashtra, India",
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: ""
};

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
            icon: <Facebook size={16} />,
            className: "social-facebook",
            href: contact.facebook
        },
        {
            name: "Instagram",
            icon: <Instagram size={16} />,
            className: "social-instagram",
            href: contact.instagram
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={16} />,
            className: "social-linkedin",
            href: contact.linkedin
        },
        {
            name: "X",
            icon: <span>𝕏</span>,
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

                        {/* Social Media */}

                        <div className="footer-socials">

                            {socialLinks.map((social) => (

                                <a
                                    key={social.name}
                                    href={social.href || undefined}
                                    target={social.href ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`footer-social-icon ${
                                        social.className
                                    }`}
                                >

                                    {social.icon}

                                </a>

                            ))}

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
                                href={contact.phone
                                    ? `tel:${contact.phone.replace(/\s/g, "")}`
                                    : undefined}
                                className="footer-contact-link"
                            >

                                <Phone size={16} />

                                <span>
                                    {contact.phone || "Phone Number"}
                                </span>

                            </a>

                            <a
                                href={contact.email
                                    ? `mailto:${contact.email}`
                                    : undefined}
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
