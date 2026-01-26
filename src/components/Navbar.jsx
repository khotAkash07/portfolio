import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-6 md:px-12 z-50 transition-all duration-300 backdrop-blur-md bg-[#0a192f]/70 border-b border-white/10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">AK<span className='text-cyan-400'>.</span></h1>
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
                {navLinks.map((link, i) => (
                    <motion.li
                        key={link.name}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={linkVariants}
                        className="relative group"
                    >
                        <a href={link.href} className="text-slate-300 hover:text-cyan-400 transition text-sm uppercase tracking-wider font-medium">
                            {link.name}
                        </a>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </motion.li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden text-2xl text-cyan-400 cursor-pointer z-50" onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed top-0 right-0 w-full h-screen bg-[#0a192f]/95 backdrop-blur-xl flex flex-col justify-center items-center z-40"
                    >
                        <ul className="space-y-8 text-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="text-2xl font-bold text-slate-100 hover:text-cyan-400 transition duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;