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
        <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-[#f6efe6]">
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.95),_rgba(246,239,230,1)_70%)]" />

            {/* GOLD GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7b17a]/20 blur-[140px]" />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 py-6">

                {/* MAIN CARD */}
                <motion.div
                    animate={
                        isOpening
                            ? {
                                scale: 1.1,
                                opacity: 0,
                                y: -40,
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
                    className="relative flex min-h-[85vh] w-full max-w-[1150px] flex-col items-center justify-center overflow-hidden rounded-[38px] border border-[#d6b184]/40 bg-white/30 px-6 py-10 backdrop-blur-xl sm:px-10"
                >
                    {/* OUTER BORDER */}
                    <div className="absolute inset-0 rounded-[38px] border border-[#c08a45]/30" />

                    {/* INNER BORDER */}
                    <div className="absolute inset-[14px] rounded-[28px] border border-[#c08a45]/20" />

                    {/* LIGHT EFFECT */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(192,138,69,0.15),transparent_40%)]" />

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeOut',
                        }}
                        className="relative z-40 flex w-full flex-col items-center justify-center text-center"
                    >

                        {/* COUPLE IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.2,
                                duration: 1.2,
                            }}
                            className="relative mb-4 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[200px]"
                        >
                            <Image
                                src="/image/couple.webp"
                                alt="Couple"
                                width={800}
                                height={1200}
                                priority
                                className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(192,138,69,0.25)]"
                            />
                        </motion.div>

                        {/* TITLE */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 1,
                            }}
                            className="script-font mb-3 text-3xl text-[#c08a45] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Wedding Invitation
                        </motion.h2>

                        {/* COUPLE NAME */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.8,
                                duration: 1,
                            }}
                            className="mb-8 text-lg font-light tracking-[0.25em] text-[#23404d] sm:text-2xl md:text-4xl"
                        >
                            {coupleName}
                        </motion.h1>

                        {/* BUTTON */}
                        {!isOpening && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1.2,
                                    duration: 1,
                                }}
                                onClick={handleOpen}
                                className="group relative overflow-hidden rounded-full border border-[#c08a45] bg-transparent px-7 py-3 text-[10px] font-medium tracking-[0.35em] text-[#c08a45] transition-all duration-300 hover:scale-105 hover:text-white sm:px-10 sm:py-4 sm:text-xs"
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