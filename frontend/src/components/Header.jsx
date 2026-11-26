
import { useState } from "react";
import {
    ChevronDown,
    Menu,
    X,
    Send
} from "lucide-react";

import logo from "../assets/logo.png";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [industryOpen, setIndustryOpen] = useState(false);

    const industries = [
        "Agriculture",
        "Food & Spices",
        "Textiles",
        "Industrial Products"
    ];

    return (

        <header className="site-header navbar-animation">

            <div className="site-container navbar-inner">

                {/* Logo */}

                <a href="#home" className="shrink-0">

                    <img
                        src={logo}
                        alt="AHPL Global Trade Partner"
                        className="navbar-logo"
                    />

                </a>

                {/* Desktop Navigation */}

                <nav className="hidden lg:flex items-center
                                desktop-navigation">

                    <a href="#home"
                       className="text-[#ff2056]">
                        Home
                    </a>

                    <a href="#about" className="nav-link">
                        About Us
                    </a>

                    <div className="relative">

                        <button
                            type="button"
                            onClick={() => setIndustryOpen(!industryOpen)}
                            aria-expanded={industryOpen}
                            className="nav-link flex items-center gap-1">

                            Industries

                            <ChevronDown
                                size={16}
                                className={`transition-transform
                                    ${industryOpen ? "rotate-180" : ""}`}
                            />

                        </button>

                        {industryOpen && (

                            <div className="absolute top-full left-0
                                            mt-5 w-[240px] bg-white
                                            rounded-xl shadow-xl p-3
                                            dropdown-animation">

                                {industries.map(item => (

                                    <a
                                        key={item}
                                        href="#industries"
                                        onClick={() => setIndustryOpen(false)}
                                        className="block rounded-lg px-4 py-3
                                                   text-sm hover:bg-pink-50
                                                   hover:text-[#ff2056]">

                                        {item}

                                    </a>

                                ))}

                            </div>

                        )}

                    </div>

                    <a href="#blog" className="nav-link">
                        Blog
                    </a>

                    <a href="#contact" className="nav-link">
                        Contact Us
                    </a>

                </nav>

                {/* Desktop CTA */}

                <div className="hidden lg:block">

                    <a href="#quote" className="quote-button">

                        Get a Quote

                        <span className="button-icon">
                            <Send size={14} fill="currentColor" />
                        </span>

                    </a>

                </div>

                {/* Mobile Menu */}

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                    className="lg:hidden text-[#102b50]">

                    {menuOpen
                        ? <X size={28} />
                        : <Menu size={28} />}

                </button>

                {/* Mobile Navigation */}

                {menuOpen && (

                    <nav className="absolute top-full mt-3
                                    left-0 right-0 bg-white
                                    rounded-2xl shadow-xl p-6
                                    lg:hidden flex flex-col gap-5
                                    dropdown-animation">

                        {[
                            ["Home", "#home"],
                            ["About Us", "#about"],
                            ["Industries", "#industries"],
                            ["Blog", "#blog"],
                            ["Contact Us", "#contact"]
                        ].map(([name, href]) => (

                            <a
                                key={name}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="font-medium hover:text-[#ff2056]">

                                {name}

                            </a>

                        ))}

                        <a
                            href="#quote"
                            onClick={() => setMenuOpen(false)}
                            className="quote-button justify-center">

                            Get a Quote

                            <span className="button-icon">
                                <Send size={14} />
                            </span>

                        </a>

                    </nav>

                )}

            </div>

        </header>

    );
}
