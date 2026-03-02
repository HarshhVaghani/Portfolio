import { Github, Linkedin, Twitter, Instagram, Download } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-espresso text-center z-10 relative">
            <div className="flex justify-center gap-4 mb-4 mt-4">
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

            <div className="mb-4">
                <a href="/Harsh_CV.pdf" download className="nav-item inline-flex items-center gap-2 px-4 py-2 border border-pale-oak-dark text-pale-oak-light rounded-md bg-transparent hover:bg-pale-oak/5 hover:text-pale-oak-light shadow-sm hover:shadow-md transform transition-all duration-200 font-medium tracking-wider uppercase text-sm">
                    <Download size={16} /> Download CV
                </a>
            </div>

            <p className="text-pale-oak-dark tracking-wide text-sm font-medium">
                &copy; {new Date().getFullYear()} Harsh Vaghani. All rights reserved.
            </p>
        </footer>
    );
}
