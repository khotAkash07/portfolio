import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "INITIALIZING SYSTEM...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-[#020617] flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-cyan-400 font-mono text-xl md:text-3xl tracking-widest font-bold"
            >
                {text}
                <span className="animate-blink">_</span>
            </motion.div>

            <div className="w-64 h-1 bg-slate-800 mt-8 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-cyan-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
            </div>

            <p className="mt-4 text-slate-500 text-xs font-mono">LOADING ASSETS // V1.0.0</p>
        </motion.div>
    );
};

export default LoadingScreen;
