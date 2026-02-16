import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
    text,
    duration,
    className,
}) => {
    const svgRef = useRef(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
            className={cn("select-none uppercase cursor-pointer", className)}
        >
            <defs>
                {/* Neon Wave Gradient - Moves horizontally */}
                <motion.linearGradient
                    id="neonGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0%" y1="0%" x2="50%" y2="0%"
                    animate={{
                        x1: ["-150%", "150%"],
                        x2: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    <stop offset="0%" stopColor="#404040" stopOpacity="0.3" />
                    <stop offset="40%" stopColor="#404040" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#E63946" stopOpacity="1" /> {/* Neon Hotspot */}
                    <stop offset="60%" stopColor="#404040" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#404040" stopOpacity="0.3" />
                </motion.linearGradient>
            </defs>

            {/* 1. Base Text (Faint Outline) */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.5"
                className="fill-transparent stroke-neutral-800 font-[helvetica] text-7xl font-bold opacity-20"
            >
                {text}
            </text>

            {/* 2. Neon Text (Animated Gradient Stroke) */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="1.5"
                stroke="url(#neonGradient)"
                className="fill-transparent font-[helvetica] text-7xl font-bold"
                style={{ filter: 'drop-shadow(0 0 3px rgba(230, 57, 70, 0.5))' }}
            >
                {text}
            </text>

            {/* 3. Hover Fill Effect (Optional, fills with Red on hover) */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0"
                fill="#E63946"
                className="font-[helvetica] text-7xl font-bold pointer-events-none"
                style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
                {text}
            </text>
        </svg>
    );
};
