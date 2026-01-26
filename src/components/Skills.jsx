import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React.js", "Tailwind CSS", "Bootstrap 5", "JavaScript (ES6+)", "HTML5", "CSS3"],
        },
        {
            title: "Backend",
            skills: ["Java (Core, 8+)", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs"],
        },
        {
            title: "Database",
            skills: ["MySQL", "PL/SQL", "MongoDB"],
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "GitHub", "Postman", "Maven", "JUnit", "IntelliJ IDEA", "VS Code"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        float: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id='skills' className="py-24 px-6 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900/0 -z-10"></div>
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Technical Skills</h2>
                        <div className="h-px bg-slate-700 flex-grow max-w-[300px]"></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            animate="float" // Continuous floating
                            className="bg-[#112240] p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors duration-300 h-full flex flex-col relative z-10"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-6 pb-2 border-b border-white/10">
                                {category.title}
                            </h3>

                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-400">
                                        <span className="text-cyan-400">▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
