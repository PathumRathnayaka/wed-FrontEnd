const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export interface InvitationData {
    guestName: string;
    coupleName: string;
    eventDate: string;
    eventTime?: string;
    venue: string;
    message: string;
    theme: 'classic' | 'modern' | 'floral';
    coverImage?: string;
    galleryImages?: string[];
    musicUrl?: string;
    primaryColor?: string;
    fontStyle?: string;
    locationMapUrl?: string;
    dressCode?: string;
    rsvp: 'pending' | 'accepted' | 'declined';
}

export interface RsvpResponse {
    guestName: string;
    rsvp: 'accepted' | 'declined';
}

export async function getInvitation(token: string): Promise<InvitationData> {
    const response = await fetch(`${API_BASE_URL}/invite/${token}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (errorData.error === 'INVALID_TOKEN') {
            throw new Error('INVALID_TOKEN');
        }
        throw new Error(errorData.message || 'Failed to fetch invitation');
    }

    return response.json();
}

export async function submitRSVP(token: string, rsvp: 'accepted' | 'declined'): Promise<RsvpResponse> {
    const response = await fetch(`${API_BASE_URL}/invite/rsvp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, response: rsvp }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit RSVP');
    }

    return response.json();
}
