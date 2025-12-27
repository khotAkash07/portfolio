import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50 ">
            <div>
                <h1 className="text-2xl font-bold text-cyan-400 ml-4 cursor-pointer">AK</h1>
            </div>

            <ul className="hidden md:flex space-x-8 mr-10">
                <li className="hover:text-cyan-400 transition cursor-pointer"><a href="#home">Home</a></li>
                <li className="hover:text-cyan-400 transition cursor-pointer"><a href="#skills">Skills</a></li>
                <li className="hover:text-cyan-400 transition cursor-pointer"><a href="#projects">Projects</a></li>
                <li className="hover:text-cyan-400 transition cursor-pointer"><a href="#contact">Contact</a></li>
            </ul>

            {/* Mobile Menu Button - Optional */}
            <div className="md:hidden flex items-center px-4">
                <span className="text-cyan-400">Menu</span>
            </div>
        </nav>
    )
}

export default Navbar