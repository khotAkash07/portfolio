import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import './App.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <AnimatePresence>
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <div className="text-slate-300 min-h-screen">

                    {/* Scroll Progress Bar */}
                    <motion.div
                        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-[0%] z-[100]"
                        style={{ scaleX }}
                    />

                    <Background />
                    <Navbar />

                    <main className="max-w-[1300px] mx-auto px-6 md:px-12">
                        <Hero />
                        <Skills />
                        <Project />
                        <Contact />
                    </main>

                    <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800/50 relative z-10 bg-[#0b1121]/80 backdrop-blur-sm">
                        <p>© {new Date().getFullYear()} Akash Anil Khot. Built with React.js & Tailwind CSS.</p>
                    </footer>

                    {/* Back To Top Button */}
                    <AnimatePresence>
                        {showTopBtn && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                onClick={scrollToTop}
                                className="fixed bottom-8 right-8 bg-cyan-400 text-slate-900 p-3 rounded-full shadow-lg hover:bg-cyan-300 transition-colors z-50"
                            >
                                <FiArrowUp size={24} />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </>
    );
}

export default App;
