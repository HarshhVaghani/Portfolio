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
        <section ref={sectionRef} id="contact" className="py-24 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="contact-anim text-5xl font-playfair font-bold text-pale-oak-light mb-16 flex items-center justify-center gap-4 opacity-0">
                    <span className="w-12 h-[1px] bg-pale-oak-dark inline-block"></span>
                    Get In Touch
                    <span className="w-12 h-[1px] bg-pale-oak-dark inline-block"></span>
                </h2>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8 contact-anim opacity-0">
                        <div>
                            <h3 className="text-3xl font-playfair font-bold text-pale-oak-light mb-4">Let&apos;s talk about everything!</h3>
                            <p className="text-pale-oak text-sm leading-relaxed">
                                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
                                I&apos;ll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6 mt-12">
                            <div className="flex items-center gap-4 text-pale-oak-dark">
                                <div className="w-12 h-12 rounded-full border border-espresso-light flex items-center justify-center bg-espresso">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-pale-oak">Email</p>
                                    <a href="mailto:hvaghani89@gamil.com" className="text-lg font-medium text-pale-oak-light hover:text-white transition-colors">hvaghani89@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-pale-oak-dark">
                                <div className="w-12 h-12 rounded-full border border-espresso-light flex items-center justify-center bg-espresso">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-pale-oak">Location</p>
                                    <p className="text-lg font-medium text-pale-oak-light">Surat, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-anim opacity-0 glass p-8 rounded-xl">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! This is a demo form."); e.target.reset(); }}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Name</label>
                                    <input type="text" className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-4 py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Email</label>
                                    <input type="email" className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-4 py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Subject</label>
                                <input type="text" className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-4 py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors" placeholder="Hello there" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-pale-oak mb-2">Message</label>
                                <textarea rows={5} className="w-full bg-espresso-dark/50 border border-espresso-light rounded-lg px-4 py-3 text-pale-oak-light focus:outline-none focus:border-pale-oak-dark transition-colors resize-none" placeholder="Your message here..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-pale-oak text-espresso-dark font-bold tracking-widest uppercase text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-pale-oak-light transition-colors">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
