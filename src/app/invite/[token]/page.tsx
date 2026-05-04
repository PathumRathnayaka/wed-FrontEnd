'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { getInvitation, submitRSVP, InvitationData } from '@/lib/api';
import OpeningScreen from '@/components/OpeningScreen';
import InvitationCard from '@/components/InvitationCard';
import EventDetails from '@/components/EventDetails';
import GallerySection from '@/components/GallerySection';
import RSVPSection from '@/components/RSVPSection';
import MusicPlayer from '@/components/MusicPlayer';
import { HeartOff } from 'lucide-react';

export default function InvitationPage() {
    const { token } = useParams<{ token: string }>();
    const [data, setData] = useState<InvitationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        if (token) {
            getInvitation(token)
                .then((res) => {
                    setData(res);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message === 'INVALID_TOKEN' ? 'INVALID_TOKEN' : 'Something went wrong');
                    setLoading(false);
                });
        }
    }, [token]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-ivory">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-gold"
                >
                    <HeartOff className="h-8 w-8" />
                </motion.div>
            </div>
        );
    }

    if (error === 'INVALID_TOKEN') {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-ivory p-6 text-center">
                <HeartOff className="mb-4 h-12 w-12 text-pink-200" />
                <h1 className="script-font text-3xl text-gold">Invitation Not Found</h1>
                <p className="mt-4 text-sm font-light text-wedding-green/60">
                    The link you followed is invalid or has expired.
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-ivory text-center">
                <p className="text-gold">Failed to load invitation. Please refresh.</p>
            </div>
        );
    }

    if (!data) return null;

    return (
        <main className="min-h-screen bg-cream selection:bg-gold selection:text-ivory">
            <AnimatePresence>
                {!isOpened && (
                    <OpeningScreen
                        coupleName={data.coupleName}
                        onOpen={() => setIsOpened(true)}
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpened ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={!isOpened ? 'pointer-events-none' : ''}
            >
                <InvitationCard
                    guestName={data.guestName}
                    coupleName={data.coupleName}
                    message={data.message}
                    theme={data.theme}
                />

                <EventDetails
                    date={data.eventDate}
                    time={data.eventTime}
                    venue={data.venue}
                    locationMapUrl={data.locationMapUrl}
                />

                <GallerySection images={data.galleryImages} />

                <RSVPSection
                    rsvpStatus={data.rsvp}
                    onRSVP={(response) => submitRSVP(token as string, response).then(() => { })}
                />

                <footer className="bg-ivory py-12 text-center">
                    <p className="script-font text-2xl text-gold mb-2">Thank You</p>
                    <p className="text-[10px] tracking-[0.4em] text-wedding-green uppercase opacity-40">
                        For Being Part of Our Story
                    </p>
                </footer>

                <MusicPlayer url={data.musicUrl} autoPlay={isOpened} />
            </motion.div>
        </main>
    );
}
