import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let w, h;
        let animationFrameId;
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, w, h);

            // Base Background Color
            ctx.fillStyle = '#0f172a'; // Slate-900 (Professional Dark Blue/Gray)
            ctx.fillRect(0, 0, w, h);

            // Grid Configuration
            const gridSize = 40;
            const spotlightRadius = 300;

            ctx.beginPath();

            // Draw Vertical Lines
            for (let x = 0; x <= w; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
            }

            // Draw Horizontal Lines
            for (let y = 0; y <= h; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
            }

            ctx.strokeStyle = 'rgba(148, 163, 184, 0.05)'; // Slate-400, barely visible
            ctx.lineWidth = 1;
            ctx.stroke();

            // Spotlight Effect (Gradient Mask)
            // We draw a radial gradient over the grid to "light it up" slightly
            const gradient = ctx.createRadialGradient(
                mouse.x, mouse.y, 0,
                mouse.x, mouse.y, spotlightRadius
            );

            // Core of light: Slightly brighter slate
            gradient.addColorStop(0, 'rgba(148, 163, 184, 0.15)');
            // Fade out
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);
        };

        const render = () => {
            drawGrid();
            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        resize();
        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-900"
        />
    );
};

export default Background;

