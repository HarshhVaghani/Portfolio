"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Github, Linkedin, Twitter, Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        anime({
            targets: navRef.current.querySelectorAll(".nav-item"),
            translateY: [-20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 500 }),
            easing: "easeOutExpo",
            duration: 1200,
        });
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav ref={navRef} className="fixed top-0 w-full z-50 glass py-3 md:py-4 px-4 md:px-8 flex justify-between items-center text-xs md:text-sm tracking-widest uppercase">
            {/* Logo */}
            <div className="nav-item font-bold text-gradient text-lg md:text-xl font-playfair flex-shrink-0">Harsh Vaghani</div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 lg:gap-8">
                <li className="nav-item">
                    <a href="#about" className="hover:text-white transition-colors cursor-pointer block">About</a>
                </li>
                <li className="nav-item">
                    <a href="#skills" className="hover:text-white transition-colors cursor-pointer block">Skills</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="hover:text-white transition-colors cursor-pointer block">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="hover:text-white transition-colors cursor-pointer block">Contact</a>
                </li>
            </ul>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
                <a href="/Harsh_CV.pdf" download className="nav-item inline-flex items-center gap-2 px-3 md:px-4 py-2 border border-pale-oak-dark text-pale-oak-light rounded-md bg-transparent hover:bg-pale-oak/5 hover:text-pale-oak-light shadow-sm hover:shadow-md transform transition-all duration-200 font-medium tracking-wider uppercase text-xs">
                    Download CV
                </a>

                <a href="https://github.com/HarshhVaghani" target="_blank" rel="noopener noreferrer" className="nav-item inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transform hover:scale-110 transition-all duration-200">
                    <Github size={18} />
                </a>

                <a href="https://www.linkedin.com/in/harshhvaghani" target="_blank" rel="noopener noreferrer" className="nav-item inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transform hover:scale-110 transition-all duration-200">
                    <Linkedin size={18} />
                </a>

                <a href="https://x.com/tech_with_harsh" target="_blank" rel="noopener noreferrer" className="nav-item inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transform hover:scale-110 transition-all duration-200">
                    <Twitter size={18} />
                </a>

                <a href="https://www.instagram.com/_.harshh_08_" target="_blank" rel="noopener noreferrer" className="nav-item inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transform hover:scale-110 transition-all duration-200">
                    <Instagram size={18} />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-pale-oak-light hover:bg-pale-oak/8 transition-all duration-200"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 md:hidden glass border-t border-pale-oak-dark/20 py-4 px-4 animate-in">
                    <ul className="flex flex-col gap-4 mb-6">
                        <li>
                            <a href="#about" onClick={closeMenu} className="block py-2 hover:text-white transition-colors cursor-pointer text-pale-oak-light">About</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={closeMenu} className="block py-2 hover:text-white transition-colors cursor-pointer text-pale-oak-light">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={closeMenu} className="block py-2 hover:text-white transition-colors cursor-pointer text-pale-oak-light">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu} className="block py-2 hover:text-white transition-colors cursor-pointer text-pale-oak-light">Contact</a>
                        </li>
                    </ul>

                    <a href="/Harsh_CV.pdf" download className="block w-full text-center py-2 mb-4 border border-pale-oak-dark text-pale-oak-light rounded-md bg-transparent hover:bg-pale-oak/5 transition-all duration-200 font-medium tracking-wider uppercase text-xs">
                        Download CV
                    </a>

                    <div className="flex justify-center items-center gap-3">
                        <a href="https://github.com/HarshhVaghani" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transition-all duration-200">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/harshhvaghani" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transition-all duration-200">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://x.com/tech_with_harsh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transition-all duration-200">
                            <Twitter size={18} />
                        </a>
                        <a href="https://www.instagram.com/_.harshh_08_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 rounded-full text-pale-oak-dark hover:text-pale-oak-light hover:bg-pale-oak/8 transition-all duration-200">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
