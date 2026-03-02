"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Navbar() {
    const navRef = useRef(null);

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

    return (
        <nav ref={navRef} className="fixed top-0 w-full z-50 glass py-4 px-8 flex justify-between items-center text-sm tracking-widest uppercase">
            <div className="nav-item font-bold text-gradient text-xl font-playfair">Harsh Vaghani</div>

            <ul className="flex gap-8">
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

            <div className="flex items-center gap-4">
                <a href="/Harsh_CV.pdf" download className="nav-item inline-flex items-center gap-2 px-4 py-2 border border-pale-oak-dark text-pale-oak-light rounded-md bg-transparent hover:bg-pale-oak/5 hover:text-pale-oak-light shadow-sm hover:shadow-md transform transition-all duration-200 font-medium tracking-wider uppercase text-sm">
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
        </nav>
    );
}
