"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { User, Target, Zap } from "lucide-react";

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: sectionRef.current.querySelectorAll(".about-item"),
                            translateY: [50, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(200),
                            easing: "easeOutSine",
                            duration: 800,
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-24 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="about-item text-5xl font-playfair font-bold text-pale-oak-light mb-12 flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-pale-oak-dark inline-block"></span>
                    About Me
                </h2>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="about-item lg:col-span-4 flex justify-center order-1 lg:order-none">
                        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-espresso-light relative group shadow-2xl">
                            <div className="absolute inset-0 bg-pale-oak-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img src="/harsh.jpg" alt="Profile Placeholder" className="w-full h-full object-cover  " />
                        </div>
                    </div>

                    <div className="about-item lg:col-span-4 space-y-6 text-pale-oak text-lg leading-relaxed order-2 lg:order-none">
                        <p>
                            Hello! I&apos;m Harsh Vaghani, a passionate Full Stack Developer with a keen eye for creating
                            elegant, robust, and visually stunning digital experiences. I specialize in bridging the gap
                            between aesthetic design and complex backend infrastructure.
                        </p>
                        <p>
                            My approach to development is centered around clean architecture, modern frameworks, and
                            pushing the boundaries of what&apos;s possible on the web—including integrating 3D elements
                            to create memorable interactions.
                        </p>
                    </div>

                    <div className="lg:col-span-4 space-y-6 order-3 lg:order-none">
                        <div className="about-item glass p-6 rounded-lg flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-espresso rounded-full text-pale-oak-light">
                                <User size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-pale-oak-light mb-2">User-Centric Design</h3>
                                <p className="text-pale-oak-dark text-sm">Building interfaces that are intuitive, accessible, and an absolute joy to use.</p>
                            </div>
                        </div>

                        <div className="about-item glass p-6 rounded-lg flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-espresso rounded-full text-pale-oak-light">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-pale-oak-light mb-2">Clean Architecture</h3>
                                <p className="text-pale-oak-dark text-sm">Writing scalable, maintainable, and highly efficient code from the ground up.</p>
                            </div>
                        </div>

                        <div className="about-item glass p-6 rounded-lg flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-espresso rounded-full text-pale-oak-light">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-pale-oak-light mb-2">Modern Technologies</h3>
                                <p className="text-pale-oak-dark text-sm">Leveraging the latest tools like React, Next.js, and WebGL to deliver high performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
