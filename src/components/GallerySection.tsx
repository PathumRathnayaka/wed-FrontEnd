'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GallerySectionProps {
    images?: string[];
}

export default function GallerySection({ images }: GallerySectionProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="px-6 py-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mx-auto max-w-sm"
            >
                <h3 className="mb-12 text-center text-sm tracking-[0.3em] text-gold underline underline-offset-8">
                    OUR MOMENTS
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    {images.map((url, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "aspect-[4/5] overflow-hidden bg-cream grayscale transition-all hover:grayscale-0",
                                idx % 3 === 0 ? "col-span-2 aspect-video" : ""
                            )}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={url}
                                alt={`Wedding moment ${idx + 1}`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
