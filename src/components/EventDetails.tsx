'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface EventDetailsProps {
    date: string;
    time?: string;
    venue: string;
    locationMapUrl?: string;
}

export default function EventDetails({ date, time, venue, locationMapUrl }: EventDetailsProps) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        const target = new Date(date).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                secs: Math.floor((difference % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [date]);

    return (
        <section className="bg-ivory/50 px-6 py-16 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mx-auto max-w-sm"
            >
                <h3 className="mb-12 text-sm tracking-[0.3em] text-gold underline underline-offset-8">
                    SAVE THE DATE
                </h3>

                <div className="mb-12 grid grid-cols-4 gap-2">
                    {Object.entries(timeLeft).map(([label, value]) => (
                        <div key={label} className="flex flex-col items-center">
                            <span className="text-2xl font-light text-wedding-green">{value}</span>
                            <span className="text-[10px] uppercase tracking-tighter text-gold opacity-60">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="space-y-8 text-sm">
                    <div className="flex flex-col items-center gap-2">
                        <Calendar className="h-5 w-5 text-gold/60" />
                        <p className="font-medium">
                            {new Date(date).toLocaleDateString(undefined, {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Clock className="h-5 w-5 text-gold/60" />
                        <p className="font-medium">{time || 'TBA'}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <MapPin className="h-5 w-5 text-gold/60" />
                        <p className="font-medium underline decoration-gold/30 underline-offset-4">
                            {venue}
                        </p>
                        {locationMapUrl && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={locationMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block px-6 py-2 text-[10px] font-bold tracking-[0.2em] text-gold border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
                            >
                                VIEW ON MAP
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
