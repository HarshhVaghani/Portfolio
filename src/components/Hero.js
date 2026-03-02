"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const timeline = anime.timeline({
            easing: "easeOutExpo",
            duration: 1500,
        });

        timeline
            .add({
                targets: heroRef.current.querySelector(".hero-greeting"),
                translateY: [30, 0],
                opacity: [0, 1],
            })
            .add({
                targets: heroRef.current.querySelector(".hero-name"),
                translateY: [30, 0],
                opacity: [0, 1],
            }, "-=1200")
            .add({
                targets: heroRef.current.querySelector(".hero-title"),
                translateY: [30, 0],
                opacity: [0, 1],
            }, "-=1200")
            .add({
                targets: heroRef.current.querySelector(".hero-cta"),
                translateY: [30, 0],
                opacity: [0, 1],
            }, "-=1000");
    }, []);

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center items-start pt-16 sm:pt-20 px-4 sm:px-0"
        >
            <p className="hero-greeting text-accent mb-3 sm:mb-4 text-sm sm:text-base md:text-lg font-medium tracking-wide">
                Hi, my name is
            </p>
            <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold text-pale-oak-light mb-2 leading-tight">
                Harsh Vaghani.
            </h1>
            <h2 className="hero-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-pale-oak-dark opacity-80 mb-6 sm:mb-8 max-w-4xl leading-tight">
                I build exceptional digital experiences.
            </h2>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
                <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 border border-pale-oak-dark text-pale-oak-light rounded hover:bg-espresso hover:text-espresso-dark transition-all duration-300 font-medium tracking-wider uppercase text-xs sm:text-sm text-center">
                    View Projects
                </a>
                <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border border-pale-oak-dark text-pale-oak-light rounded hover:bg-espresso hover:text-espresso-dark transition-all duration-300 font-medium tracking-wider uppercase text-xs sm:text-sm text-center">
                    Contact Me
                </a>
            </div>
        </section>
    );
}
