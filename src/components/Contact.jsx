import React from "react";
import whatsappIcon from "../assets/whatsapp.png";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center text-slate-100"
        >
            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
                Get in Touch 📬
            </h2>

            {/* MAIN CONTAINER */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
                {/* LEFT SIDE */}
                <div className="space-y-5 w-full md:w-1/2">
                    <InfoCard
                        icon={<MailIcon />}
                        title="Email"
                        value="khotakash5737@gmail.com"
                        href="https://mail.google.com/mail/?view=cm&to=khotakash5737@gmail.com"
                        external
                    />

                    <InfoCard
                        icon={<PhoneIcon />}
                        title="Phone"
                        value="+91 9022425737"
                        href="tel:+919022425737"
                    />

                    <InfoCard
                        icon={<MapPinIcon />}
                        title="Address"
                        value="Narhe, Pune 411041"
                    />

                    <InfoCard
                        icon={<WhatsAppIcon />}
                        title="WhatsApp"
                        value="+91 9022425737"
                        href="https://wa.me/919022425737"
                        external
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className="border w-full md:w-1/2 border-slate-700 rounded-lg p-6 md:p-8 bg-slate-900">
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 text-sm sm:text-base hover:border-cyan-400 transition"
                            />
                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 text-sm sm:text-base hover:border-cyan-400 transition"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject *"
                            className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 text-sm sm:text-base hover:border-cyan-400 transition"
                        />

                        <textarea
                            rows="5"
                            placeholder="Message *"
                            className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 resize-none text-sm sm:text-base hover:border-cyan-400 transition"
                        />

                        <a
                            href="https://wa.me/919022425737"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-400 text-slate-900 font-bold rounded text-sm sm:text-base hover:scale-105 transition"
                        >
                            <WhatsAppIcon />
                            Send Message via WhatsApp
                        </a>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

//
// ---------------- INFO CARD ----------------
//
const InfoCard = ({ icon, title, value, href, external }) => {
    const handleClick = () => {
        if (!href) return;
        external ? window.open(href, "_blank") : (window.location.href = href);
    };

    return (
        <div
            onClick={handleClick}
            className="flex items-center gap-4 border border-slate-700 bg-slate-900/50 rounded-lg p-4 sm:p-5 cursor-pointer hover:border-cyan-400 transition"
        >
            <div className="text-cyan-400 p-3 bg-slate-800 rounded-md">
                {icon}
            </div>

            <div>
                <h4 className="font-bold text-slate-100 text-base sm:text-lg">
                    {title}
                </h4>
                <p className="text-slate-400 text-sm sm:text-base">
                    {value}
                </p>
            </div>
        </div>
    );
};

//
// ---------------- ICONS ----------------
//
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 8.67A2 2 0 0 1 4.11 2h3" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const WhatsAppIcon = () => (
    <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
);
