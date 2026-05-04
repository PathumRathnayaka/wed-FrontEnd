'use client';

import { motion } from 'framer-motion';

interface InvitationCardProps {
    guestName: string;
    coupleName: string;
    message: string;
    theme?: string;
}

export default function InvitationCard({ guestName, coupleName, message, theme }: InvitationCardProps) {
    return (
        <section className="relative px-6 py-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-md"
            >
                <p className="mb-6 text-sm italic tracking-widest text-gold opacity-80">
                    Dear {guestName},
                </p>

                <h2 className="script-font mb-8 text-4xl text-wedding-green md:text-5xl">
                    We are getting married!
                </h2>

                <div className="mb-12 flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-gold opacity-30" />
                    <h1 className="text-2xl font-bold tracking-[0.2em] text-wedding-green">
                        {coupleName}
                    </h1>
                    <div className="h-[1px] w-12 bg-gold opacity-30" />
                </div>

                <p className="playfair-font leading-relaxed text-wedding-green/80">
                    {message}
                </p>

                {theme === 'floral' && (
                    <div className="mt-8 text-gold opacity-20">
                        {/* Simple floral decoration placeholder */}
                        <svg viewBox="0 0 100 20" className="mx-auto w-32 fill-current">
                            <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </svg>
                    </div>
                )}
            </motion.div>
        </section>
    );
}
