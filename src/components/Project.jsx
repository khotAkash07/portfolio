import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Project = () => {
    const projectList = [
        {
            title: "Expense Tracker System",
            desc: "Architected a secure full-stack finance application with RBAC. Engineered RESTful APIs using Spring Boot and designed a responsive dashboard using React.js and Tailwind CSS.",
            tech: ["React.js", "Spring Boot", "MySQL", "Tailwind"],
            github: "#",
            live: "#"
        },
        {
            title: "Purchase & Selling System",
            desc: "Developed a B2B platform facilitating workflows between Admin, Seller, and Buyer roles. Implemented secure session management and optimized frontend state using React Hooks.",
            tech: ["React.js", "Spring Boot", "REST APIs"],
            github: "#",
            live: "#"
        },
        {
            title: "Hospital Staff Management",
            desc: "Centralized system for staff attendance and salary calculation using Java Servlets and JSP. Integrated Lombok and JUnit, with user-friendly HTML/CSS forms.",
            tech: ["Java", "JSP", "Servlets", "MySQL", "Maven"],
            github: "#",
            live: "#"
        },
        {
            title: "Online Auction System",
            desc: "Built a dynamic auctioning platform for real-time bids. Structured MySQL schema for efficient data retrieval and handled concurrent user requests using Java Servlets.",
            tech: ["Java", "JSP", "Servlets", "MySQL"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 md:px-0 relative">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-[1000px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tighter">Selected <span className="text-cyan-400">Works</span></h2>
                    <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent flex-grow max-w-[300px]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projectList.map((p, index) => (
                        <TiltCard key={index} p={p} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// 3D Tilt Card Component
const TiltCard = ({ p, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-[#112240] p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 relative group perspective-1000"
        >
            <div style={{ transform: "translateZ(50px)" }}>
                <div className="flex justify-between items-center mb-6">
                    <div className="p-3 bg-cyan-900/20 rounded-lg text-cyan-400">
                        <FiFolder className="text-3xl" />
                    </div>
                    <div className="flex gap-4 text-slate-400">
                        <a href={p.github} className="hover:text-cyan-400 text-xl transition transform hover:scale-125"><FiGithub /></a>
                        <a href={p.live} className="hover:text-cyan-400 text-xl transition transform hover:scale-125"><FiExternalLink /></a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {p.desc}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                    {p.tech.map(t => (
                        <li key={t} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            {t}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Gloss Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default Project;