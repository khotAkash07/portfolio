import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React.js", "Tailwind CSS", "Bootstrap 5", "JavaScript (ES6+)", "HTML5", "CSS3"],
        },
        {
            title: "Backend Development",
            skills: ["Java (Core, 8+)", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs"],
        },
        {
            title: "Databases",
            skills: ["MySQL", "PL/SQL", "MongoDB"],
        },
        {
            title: "Developer Tools",
            skills: ["Git", "GitHub", "Postman", "Maven", "JUnit", "IntelliJ IDEA", "VS Code"],
        },
    ];

    return (
        <section id='skills' className="bg-slate-900 text-slate-200 py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-blue-400 rounded"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-300 mb-4">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;