'use client';

import { motion } from 'framer-motion';
import { Clock, Flower2 } from 'lucide-react';

interface Ritual {
    title: string;
    time: string;
}

interface WeddingRitualsProps {
    rituals: Ritual[];
}

export default function WeddingRituals({ rituals }: WeddingRitualsProps) {
    if (!rituals || rituals.length === 0) return null;

    return (
        <section className="relative overflow-hidden bg-ivory/30 px-6 py-20 lg:py-32">
            {/* Background Decoration */}
            <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 opacity-[0.03]">
                <Flower2 className="h-96 w-96 rotate-45 text-wedding-green" />
            </div>
            <div className="absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2 opacity-[0.03]">
                <Flower2 className="h-96 w-96 -rotate-45 text-wedding-green" />
            </div>

            <div className="relative mx-auto max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="mb-4 block text-[10px] font-bold tracking-[0.5em] text-gold uppercase">
                        Sequence of Events
                    </span>
                    <h2 className="script-font mb-16 text-4xl text-wedding-green md:text-6xl">
                        Wedding Rituals
                    </h2>
                </motion.div>

                <div className="relative space-y-12 before:absolute before:left-1/2 before:top-0 before:h-full before:w-[1px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-gold/30 before:to-transparent">
                    {rituals.map((ritual, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-10% 0px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative flex flex-col items-center"
                        >
                            {/* Center Dot */}
                            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-gold bg-ivory shadow-[0_0_10px_rgba(212,175,55,0.3)]" />

                            <div className="mt-8 rounded-2xl border border-gold/10 bg-white/40 p-6 backdrop-blur-md shadow-sm transition-all hover:bg-white/60 hover:shadow-md md:w-80">
                                <div className="mb-2 flex items-center justify-center gap-2 text-gold">
                                    <Clock className="h-3.5 w-3.5" />
                                    <span className="text-xs font-bold tracking-widest">{ritual.time}</span>
                                </div>
                                <h3 className="text-lg font-light tracking-wide text-wedding-green underline underline-offset-8 decoration-gold/20">
                                    {ritual.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20"
                >
                    <Flower2 className="mx-auto h-8 w-8 text-gold/20" />
                </motion.div>
            </div>
        </section>
    );
}
