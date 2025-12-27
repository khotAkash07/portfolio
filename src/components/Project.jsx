import React from 'react'

const Project = () => {
    const projectList = [
        {
            title: "Expense Tracker System",
            desc: "Architected a secure full-stack finance application with RBAC. Engineered RESTful APIs using Spring Boot and designed a responsive dashboard using React.js and Tailwind CSS.",
            tech: ["React.js", "Spring Boot", "MySQL", "Tailwind"]
        },
        {
            title: "Purchase & Selling System",
            desc: "Developed a B2B platform facilitating workflows between Admin, Seller, and Buyer roles. Implemented secure session management and optimized frontend state using React Hooks.",
            tech: ["React.js", "Spring Boot", "REST APIs"]
        },
        {
            title: "Hospital Staff Management",
            desc: "Centralized system for staff attendance and salary calculation using Java Servlets and JSP. Integrated Lombok and JUnit, with user-friendly HTML/CSS forms.",
            tech: ["Java", "JSP", "Servlets", "MySQL", "Maven"]
        },
        {
            title: "Online Auction System",
            desc: "Built a dynamic auctioning platform for real-time bids. Structured MySQL schema for efficient data retrieval and handled concurrent user requests using Java Servlets.",
            tech: ["Java", "JSP", "Servlets", "MySQL"]
        }
    ];

    return (
        <section id="projects" className="py-24">
            <h2 className="text-3xl font-bold border-b-4 border-cyan-400 inline-block mb-12 text-slate-100">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projectList.map((p, index) => (
                    <div key={index} className="bg-[#112240] p-8 rounded-xl border border-slate-800 hover:border-cyan-400 transition-colors group">
                        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400">{p.title}</h3>
                        <p className="text-slate-400 mb-6">{p.desc}</p>
                        <div className="flex flex-wrap gap-3">
                            {p.tech.map(t => (
                                <span key={t} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project