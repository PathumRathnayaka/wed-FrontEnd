'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface RSVPSectionProps {
    rsvpStatus: 'pending' | 'accepted' | 'declined';
    onRSVP: (response: 'accepted' | 'declined') => Promise<void>;
}

export default function RSVPSection({ rsvpStatus, onRSVP }: RSVPSectionProps) {
    const [loading, setLoading] = useState(false);
    const [currentRsvp, setCurrentRsvp] = useState(rsvpStatus);

    const handleRsvp = async (response: 'accepted' | 'declined') => {
        setLoading(true);
        try {
            await onRSVP(response);
            setCurrentRsvp(response);
        } catch (error) {
            console.error(error);
            alert('Failed to update RSVP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-wedding-green px-6 py-20 text-center text-ivory">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-sm"
            >
                <h3 className="mb-4 text-sm tracking-[0.3em] text-gold">RSVP</h3>
                <p className="mb-12 font-light italic text-ivory/70">
                    Will you join us in our special day?
                </p>

                <div className="flex flex-col gap-4">
                    {currentRsvp === 'pending' ? (
                        <>
                            <button
                                disabled={loading}
                                onClick={() => handleRsvp('accepted')}
                                className="flex items-center justify-center gap-2 rounded-lg border border-gold bg-gold py-4 text-sm font-bold tracking-widest text-wedding-green transition-all active:scale-95 disabled:opacity-50"
                            >
                                <Check className="h-4 w-4" /> YES, I'LL BE THERE
                            </button>
                            <button
                                disabled={loading}
                                onClick={() => handleRsvp('declined')}
                                className="flex items-center justify-center gap-2 rounded-lg border border-ivory/30 bg-transparent py-4 text-sm font-bold tracking-widest text-ivory transition-all active:scale-95 disabled:opacity-50"
                            >
                                <X className="h-4 w-4" /> SORRY, I CAN'T MAKE IT
                            </button>
                        </>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="rounded-lg bg-ivory/10 p-8"
                        >
                            <p className="mb-2 text-xl font-medium tracking-wide">
                                {currentRsvp === 'accepted' ? 'See you there!' : "We'll miss you!"}
                            </p>
                            <p className="text-xs text-gold opacity-60">
                                You have marked as: {currentRsvp.toUpperCase()}
                            </p>
                            <button
                                onClick={() => setCurrentRsvp('pending')}
                                className="mt-6 text-[10px] underline underline-offset-4 opacity-40"
                            >
                                Change response
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
