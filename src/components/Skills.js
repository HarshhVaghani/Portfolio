"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

const skills = [
    { name: "Html", level: 90 },
    { name: "ReactJs", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "TailwindCSS", level: 80 },
    { name: "Node.js / Express", level: 85 },
    { name: "MongoDB / PostgreSQL", level: 80 },
];

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        // Animate headers and wrappers
                        anime({
                            targets: sectionRef.current.querySelectorAll(".skill-item"),
                            translateX: [-30, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(100),
                            easing: "easeOutQuad",
                            duration: 800,
                        });

                        // Animate progress bars
                        const progressBars = sectionRef.current.querySelectorAll(".progress-bar");
                        progressBars.forEach((bar, i) => {
                            const targetWidth = bar.getAttribute("data-width");
                            anime({
                                targets: bar,
                                width: [0, targetWidth + "%"],
                                delay: 200 + i * 100,
                                easing: "easeOutExpo",
                                duration: 1500,
                            });
                        });

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-24 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="skill-item text-5xl font-playfair font-bold text-pale-oak-light mb-16 flex items-center gap-4 justify-end">
                    My Capabilities
                    <span className="w-12 h-[1px] bg-pale-oak-dark inline-block"></span>
                </h2>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="flex justify-between mb-2">
                                <span className="text-pale-oak text-sm md:text-base font-medium tracking-wide">{skill.name}</span>
                                <span className="text-pale-oak-dark text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full h-1 bg-espresso-light rounded overflow-hidden">
                                <div
                                    className="progress-bar h-full bg-gradient-to-r from-pale-oak-dark to-pale-oak-light rounded"
                                    data-width={skill.level}
                                    style={{ width: "0%" }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
