import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-0 pt-20">
            <div className="max-w-[1000px] mx-auto w-full relative">
                {/* Decorative Shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-cyan-400 font-mono mb-4 tracking-widest text-lg"
                >
                    &lt;Hello /&gt; my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl sm:text-8xl font-black text-slate-100 mb-2 leading-tight tracking-tighter"
                >
                    Akash <span className="animate-text-gradient">Anil Khot</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6 tracking-wide"
                >
                    Software Developer <span className="text-cyan-400">(Fresher)</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-slate-400 max-w-[600px] leading-relaxed mb-10 text-lg border-l-4 border-cyan-400 pl-6 bg-slate-900/30 py-4 backdrop-blur-sm"
                >
                    Certified Java Full Stack Developer. Master of Applications.
                    I fuse <span className="text-slate-100 font-medium">React.js</span> visuals with robust <span className="text-slate-100 font-medium">Spring Boot</span> backends to build high-performance web ecosystems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='flex flex-row gap-6'
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 font-bold text-slate-900 bg-cyan-400 rounded-md overflow-hidden transform hover:-translate-y-1 transition duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]"
                    >
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 transition duration-300 ease-out group-hover:opacity-90"></span>
                        <span className="relative z-10">EXPLORE WORK</span>
                    </a>

                    <a
                        href="/portfolio/Akash_Khot_Resume.pdf"
                        download="Akash_Khot_Resume.pdf"
                        className="px-8 py-4 font-bold text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400/10 transition duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    >
                        RESUME
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
