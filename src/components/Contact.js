"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: sectionRef.current.querySelectorAll(".contact-anim"),
                            translateY: [50, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(150),
                            easing: "easeOutExpo",
                            duration: 1200,
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-12 sm:py-16 md:py-24 min-h-screen flex items-center justify-center px-4 sm:px-0">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="contact-anim text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-pale-oak-light mb-8 sm:mb-12 md:mb-16 flex items-center justify-center gap-3 md:gap-4 opacity-0 flex-col sm:flex-row">
                    <span className="w-8 sm:w-12 h-[1px] bg-pale-oak-dark inline-block hidden sm:inline-block"></span>
                    Get In Touch
                    <span className="w-8 sm:w-12 h-[1px] bg-pale-oak-dark inline-block hidden sm:inline-block"></span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    <div className="space-y-6 md:space-y-8 contact-anim opacity-0">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-pale-oak-light mb-3 md:mb-4">Let&apos;s talk about everything!</h3>
                            <p className="text-pale-oak text-sm md:text-base leading-relaxed">
                                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
                                I&apos;ll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
                            <div className="flex items-center gap-3 md:gap-4 text-pale-oak-dark">
                                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border border-espresso-light flex items-center justify-center bg-espresso flex-shrink-0">
                                    <Mail size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-widest text-pale-oak">Email</p>
                                    <a href="mailto:hvaghani89@gmail.com" className="text-base md:text-lg font-medium text-pale-oak-light hover:text-white transition-colors break-all">hvaghani89@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 md:gap-4 text-pale-oak-dark">
                                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border border-espresso-light flex items-center justify-center bg-espresso flex-shrink-0">
                                    <MapPin size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-widest text-pale-oak">Location</p>
                                    <p className="text-base md:text-lg font-medium text-pale-oak-light">Surat, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-anim opacity-0 glass p-6 md:p-8 rounded-xl">
                        <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! This is a demo form."); e.target.reset(); }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Name</label>
                                    <input type="text" className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-3 md:px-4 py-2 md:py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors text-sm md:text-base" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Email</label>
                                    <input type="email" className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-3 md:px-4 py-2 md:py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors text-sm md:text-base" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Subject</label>
                                <input type="text" className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-3 md:px-4 py-2 md:py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors text-sm md:text-base" placeholder="Hello there" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-3 md:px-4 py-2 md:py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors resize-none text-sm md:text-base" placeholder="Your message here..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 md:py-4 bg-pale-oak text-espresso-dark font-bold tracking-widest uppercase text-xs md:text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-pale-oak-light transition-colors">
                                <Send size={18} className="md:w-5 md:h-5" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
