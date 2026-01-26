import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck } from "react-icons/fi";
import whatsappIcon from "../assets/whatsapp.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp Message Construction (Most Reliable)
        const waMessage = `Hi, I'm ${formData.name}.%0a%0a${formData.message}%0a%0aMy Email: ${formData.email}`;
        const waUrl = `https://wa.me/919022425737?text=${waMessage}`;

        // Open WhatsApp in new tab
        window.open(waUrl, '_blank');

        // Optional: Also try to trigger mailto as backup or secondary
        // const subject = `Portfolio Contact from ${formData.name}`;
        // const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        // window.location.href = `mailto:khotakash5737@gmail.com?subject=${subject}&body=${body}`;
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("khotakash5737@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-0">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 max-w-[600px] mx-auto text-lg leading-relaxed">
                        I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>

                        <div
                            onClick={copyEmail}
                            className="flex items-center gap-4 p-6 bg-[#112240] rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="text-2xl text-cyan-400 bg-slate-800 p-4 rounded-full group-hover:scale-110 transition-transform">
                                <FiMail />
                            </div>
                            <div className="flex-grow">
                                <h4 className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Email</h4>
                                <p className="text-slate-200 font-medium text-lg">khotakash5737@gmail.com</p>
                            </div>
                            <div className="text-slate-500 group-hover:text-cyan-400">
                                {copied ? <FiCheck size={20} className="text-green-400" /> : <FiCopy size={20} />}
                            </div>
                        </div>

                        <ContactCard
                            icon={<FiPhone />}
                            title="Phone"
                            value="+91 9022425737"
                            href="tel:+919022425737"
                        />
                        <ContactCard
                            icon={<FiMapPin />}
                            title="Address"
                            value="Narhe, Pune 411041"
                        />

                        <a
                            href="https://wa.me/919022425737"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-3 p-4 bg-[#25D366]/10 border border-[#25D366] text-[#25D366] rounded-xl font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300"
                        >
                            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                            Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#112240] p-8 rounded-2xl border border-slate-700 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                                        placeholder="abc@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                                    placeholder="Hi, I'd like to discuss..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cyan-400 text-slate-900 font-bold py-4 rounded-lg hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg shadow-cyan-400/20"
                            >
                                <img src={whatsappIcon} alt="WA" className="w-5 h-5 opacity-80" />
                                Send via WhatsApp
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, value, href }) => {
    return (
        <a
            href={href}
            className={`flex items-center gap-4 p-6 bg-[#112240] rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 text-left ${href ? 'cursor-pointer hover:-translate-y-1' : ''}`}
        >
            <div className="text-2xl text-cyan-400 bg-slate-800 p-4 rounded-full">
                {icon}
            </div>
            <div>
                <h4 className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">{title}</h4>
                <p className="text-slate-200 font-medium break-all text-lg">{value}</p>
            </div>
        </a>
    )
}

export default Contact;
