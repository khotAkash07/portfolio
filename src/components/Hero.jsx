import React, {useEffect, useState} from 'react'

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoaded(true);
    }, []);
    return (
        <section id="home" className={`h-screen flex flex-col justify-center
          text-xl text-slate-400
          transform transition-all duration-1000 delay-300 ease-out
          ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
        `}>
            <p>Hi, my name is</p>
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-2">Akash Khot.</h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-slate-400">I build scalable full-stack apps.</h2>
            <p className="py-6 max-w-[600px] leading-relaxed">
                I’m a developer specializing in Java, Spring Boot, and React. I love creating
                efficient backend systems and responsive frontend experiences.
            </p>
            <div className='flex flex-row gap-4'>
                <a href="#projects" className="border-2 border-cyan-400 px-6 py-3 my-2 inline-block hover:bg-cyan-400/10 transition">
                    View My Work
                </a>
                <a
                    href={`https://khotakash07.github.io/portfolio/Akash_Khot_resume.pdf`}
                    download="Akash_Khot_resume.pdf"
                    className="flex gap-2 border-2 border-cyan-400 px-6 py-3 my-2 hover:bg-cyan-400/10 transition"
                >
                {/* Download Icon (SVG) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5 mt-1"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75V17.25m0 0L8.25 13.5m3.75 3.75 3.75-3.75M12 3v2.25" />
                    </svg>

                    Download Resume
                </a>
            </div>

        </section>
    )
}

export default Hero