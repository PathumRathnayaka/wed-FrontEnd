'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

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
            {/* Luxury Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9),_rgba(248,244,238,1)_70%)]" />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-4">
                {/* MAIN WRAPPER */}
                <div className="relative flex h-screen w-screen items-center justify-center">

                    {/* ENVELOPE AREA */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-[70vw] w-[92vw] max-w-[1200px] md:h-[55vw] md:w-[78vw]">

                            {/* SOFT LUXURY GLOW */}
                            <div className="absolute inset-0 z-0 scale-105 rounded-[60px] bg-[#e8d8bf] opacity-70 blur-[90px]" />

                            {/* EDGE SHADOW / FADE */}
                            <div className="absolute inset-0 z-0 rounded-[60px] shadow-[0_0_120px_60px_rgba(232,216,191,0.85)]" />

                            {/* TOP FLAP */}
                            <motion.div
                                animate={
                                    isOpening
                                        ? {
                                            y: '-45vh',
                                            rotate: -3,
                                            opacity: 0,
                                            scale: 1.08,
                                        }
                                        : {
                                            y: 0,
                                            rotate: 0,
                                            opacity: 1,
                                            scale: 1,
                                        }
                                }
                                transition={{
                                    duration: 1.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0 z-30"
                            >
                                <Image
                                    src="/image/enlop-top.png"
                                    alt="Envelope Flap"
                                    fill
                                    priority
                                    className="object-contain drop-shadow-[0_30px_60px_rgba(120,80,40,0.25)]"
                                />
                            </motion.div>

                            {/* BOTTOM BASE */}
                            <motion.div
                                animate={
                                    isOpening
                                        ? {
                                            y: '45vh',
                                            opacity: 0,
                                            scale: 1.08,
                                        }
                                        : {
                                            y: 0,
                                            opacity: 1,
                                            scale: 1,
                                        }
                                }
                                transition={{
                                    duration: 1.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0 z-10"
                            >
                                <Image
                                    src="/image/enlopbase-bottom.png"
                                    alt="Envelope Base"
                                    fill
                                    priority
                                    className="object-contain drop-shadow-[0_30px_60px_rgba(120,80,40,0.22)]"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeOut',
                        }}
                        className="relative z-40 flex flex-col items-center justify-center text-center"
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
                </div>
            </div>
        </div>
    );
}