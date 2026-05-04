'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface OpeningScreenProps {
    coupleName: string;
    onOpen: () => void;
}

export default function OpeningScreen({ coupleName, onOpen }: OpeningScreenProps) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory p-6 text-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
            >
                <Heart className="mx-auto h-12 w-12 text-gold" fill="currentColor" />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="script-font mb-4 text-4xl text-gold md:text-6xl"
            >
                Wedding Invitation
            </motion.h2>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-12 text-2xl font-semibold tracking-widest text-wedding-green md:text-4xl"
            >
                {coupleName}
            </motion.h1>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                onClick={onOpen}
                className="rounded-full border border-gold bg-transparent px-8 py-3 text-sm font-medium tracking-widest text-gold transition-all hover:bg-gold hover:text-ivory"
            >
                OPEN INVITATION
            </motion.button>
        </motion.div>
    );
}
