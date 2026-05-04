import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream p-6 text-center">
      <div className="max-w-md">
        <Heart className="mx-auto mb-6 h-12 w-12 text-gold animate-pulse" />
        <h1 className="script-font mb-4 text-5xl text-gold">
          Wedding Invitation Platform
        </h1>
        <p className="playfair-font mb-8 text-xl text-wedding-green/80">
          Personalized digital experiences for your special day.
        </p>
        <div className="h-px w-32 bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-widest text-wedding-green opacity-60">
          GUESTS: PLEASE USE YOUR UNIQUE INVITITATION LINK
        </p>
      </div>
    </main>
  );
}
