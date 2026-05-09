'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface OpeningScreenProps {
    coupleName: string;
    onOpen: () => void;
}

export default function OpeningScreen({
    coupleName,
    onOpen,
}: OpeningScreenProps) {
    const [isOpening, setIsOpening] = useState(false);

    const handleOpen = () => {
        setIsOpening(true);

        setTimeout(() => {
            onOpen();
        }, 2200);
    };

    return (
        <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-[#f8f4ee]">
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.95),_rgba(248,244,238,1)_70%)]" />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-4">

                {/* GLOW */}
                <div className="absolute h-[70vw] w-[90vw] rounded-[50px] bg-[#d8b07a]/40 blur-[120px]" />

                {/* MAIN CARD */}
                <motion.div
                    animate={
                        isOpening
                            ? {
                                scale: 1.15,
                                opacity: 0,
                                y: -50,
                            }
                            : {
                                scale: 1,
                                opacity: 1,
                                y: 0,
                            }
                    }
                    transition={{
                        duration: 1.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex h-[78vh] w-full max-w-[1100px] items-center justify-center overflow-hidden rounded-[40px] border border-[#d7b17a]/40 bg-white/30 backdrop-blur-xl"
                >
                    {/* OUTER GOLD BORDER */}
                    <div className="absolute inset-0 rounded-[40px] border border-[#c08a45]/30" />

                    {/* INNER BORDER */}
                    <div className="absolute inset-[14px] rounded-[30px] border border-[#c08a45]/20" />

                    {/* CORNER GLOW */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(192,138,69,0.18),transparent_40%)]" />

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeOut',
                        }}
                        className="relative z-40 flex flex-col items-center justify-center px-6 text-center"
                    >
                        {/* TITLE */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                            }}
                            className="script-font mb-4 text-4xl text-[#c08a45] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Wedding Invitation
                        </motion.h2>

                        {/* COUPLE NAME */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.6,
                                duration: 1,
                            }}
                            className="mb-8 text-xl font-light tracking-[0.25em] text-[#23404d] sm:text-2xl md:text-4xl"
                        >
                            {coupleName}
                        </motion.h1>

                        {/* BUTTON */}
                        {!isOpening && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1,
                                    duration: 1,
                                }}
                                onClick={handleOpen}
                                className="group relative overflow-hidden rounded-full border border-[#c08a45] bg-transparent px-6 py-3 text-[10px] font-medium tracking-[0.35em] text-[#c08a45] transition-all duration-300 hover:text-white sm:px-8 sm:text-xs md:px-10 md:py-4"
                            >
                                <span className="relative z-10">
                                    OPEN INVITATION
                                </span>

                                <div className="absolute inset-0 -z-10 translate-y-full bg-[#c08a45] transition-transform duration-500 group-hover:translate-y-0" />
                            </motion.button>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}