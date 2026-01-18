import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import './App.css'

function App() {


    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.location.hash) {
            window.history.replaceState(null, null, ' ');
        }
    }, []);
    return (
        <div className="bg-[#0a192f] text-slate-300 min-h-screen scroll-smooth">
            <Navbar />
            <main className="max-w-[1300px] mx-auto px-8">
                <Hero />
                <Skills />
                <Project />
                <Contact />
            </main>
            <footer className="text-center py-10 text-slate-500 text-sm border-t border-slate-800">
                © {new Date().getFullYear()} Akash Anil Khot. Built with React & Tailwind.
            </footer>
        </div>
    )

}

export default App
