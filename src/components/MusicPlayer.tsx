'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
    url?: string;
    autoPlay?: boolean;
}

export default function MusicPlayer({ url, autoPlay = false }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (autoPlay && audioRef.current) {
            // Browsers often block auto-play until interaction
            // We'll handle this through the OpeningScreen transition usually
        }
    }, [autoPlay]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(console.error);
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!url) return null;

    return (
        <>
            <audio ref={audioRef} src={url} loop />
            <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={togglePlay}
                className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold/90 text-ivory shadow-xl backdrop-blur-sm transition-transform active:scale-90"
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                        >
                            <Music2 className="h-5 w-5" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="paused"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Music className="h-5 w-5 opacity-60" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {isPlaying && (
                    <span className="absolute -inset-1 animate-ping rounded-full bg-gold/30" />
                )}
            </motion.button>
        </>
    );
}
