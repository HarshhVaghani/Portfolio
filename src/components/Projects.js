"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Spotify Clone",
        image: "/projects/spotifyclone.png",
        description: "A responsive Spotify-inspired music streaming web app built using HTML, Tailwind CSS, and JavaScript with interactive UI and playback controls.",
        tech: ["HTML5", "Tailwind CSS", "JavaScript (ES6)"],
        github: "https://github.com/HarshhVaghani/Workfolio_harsh_vaghani/tree/main/Spotify%20Clone",
        live: "https://workfolio-harsh-vaghani.vercel.app/Spotify%20Clone/index.html"
    },
    {
        title: "Blueberry E-Commerce",
        image: "/projects/blueberry.png",
        description: "A modern and responsive e-commerce website built with React, Vite, and Tailwind CSS featuring dynamic product listings, smooth UI interactions, and optimized performance.",
        tech: ["React.js", "Vite", "Tailwind CSS", "React Router"],
        github: "https://github.com/HarshhVaghani/ReactJS/tree/main/Other%20Projects/Blueberry%20E-Commerce",
        live: "https://blueberryecommerce.vercel.app/"
    },
    {
        title: "Finance Loan Company",
        image: "/projects/loancompany.png",
        description: "A clean and professional loan company website developed using HTML, CSS, and Tailwind CSS with responsive design and user-friendly service presentation.",
        tech: ["Next.js", "OpenAI", "TailwindCSS", "MongoDB"],
        github: "https://github.com/HarshhVaghani/Workfolio_harsh_vaghani/tree/main/Loan%20Company",
        live: "https://workfolio-harsh-vaghani.vercel.app/Loan%20Company/index.html"
    },
    {
        title: "Portfolio Website",
        image: "/projects/portfolio.png",
        description: "A fully responsive personal portfolio website built using HTML and CSS to showcase projects, skills, and contact information with a clean and modern design.",
        tech: ["HTML5", "CSS3 (Responsive Design)"],
        github: "https://github.com/HarshhVaghani/Workfolio_harsh_vaghani/tree/main/Personal%20Portfolio",
        live: "https://workfolio-harsh-vaghani.vercel.app/Personal%20Portfolio/index.html"
    }
];

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        anime({
                            targets: sectionRef.current.querySelectorAll(".project-card"),
                            translateY: [100, 0],
                            opacity: [0, 1],
                            rotateX: [20, 0],
                            delay: anime.stagger(150),
                            easing: "easeOutExpo",
                            duration: 1200,
                        });

                        anime({
                            targets: sectionRef.current.querySelector(".section-title"),
                            translateX: [-50, 0],
                            opacity: [0, 1],
                            easing: "easeOutExpo",
                            duration: 1000,
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
        <section ref={sectionRef} id="projects" className="py-24 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="section-title text-5xl font-playfair font-bold text-pale-oak-light mb-16 flex items-center gap-4 opacity-0">
                    <span className="w-12 h-[1px] bg-pale-oak-dark inline-block"></span>
                    Selected Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card opacity-0 glass rounded-xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300">
                            <div className="h-48 bg-espresso-light relative overflow-hidden group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/20 transition-all duration-300">
                                <img src={project.image || '/projects/placeholder.svg'} alt={`${project.title} preview`} className="w-full h-full object-cover group-hover:scale-105 transform transition-all duration-300" />

                                <div className="absolute inset-0 bg-gradient-to-br from-espresso-dark/40 to-transparent p-6 flex items-end">
                                    <h3 className="text-2xl font-bold text-pale-oak-light font-playfair">{project.title}</h3>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-pale-oak text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-espresso rounded-full text-xs text-pale-oak-dark font-medium font-inter tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center border-t border-espresso pt-4">
                                    <a href={project.github} className="text-pale-oak hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.live} className="text-pale-oak hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://github.com/HarshhVaghani" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border border-pale-oak-dark text-pale-oak-light rounded hover:bg-pale-oak hover:text-espresso transition-all duration-300 font-medium tracking-wider uppercase text-sm">
                        View Archive
                    </a>
                </div>
            </div>
        </section>
    );
}
