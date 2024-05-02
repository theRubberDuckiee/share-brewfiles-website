import type { APIRoute } from 'astro';
import { db } from '@/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { brewfileData, userInfo } = await request.json();
        const collectionRef = collection(db, 'brewfiles');
        
        const getCurrentDate = () => new Date().toISOString();

        // Verify brewfile data

        // Deal with potential duplicate user

        // Start generating personality quiz

        const docRef = await addDoc(collectionRef, { 
            data: brewfileData,
            date: getCurrentDate(),
            userInfo: userInfo,
        });

        return new Response(JSON.stringify({ success: true, id: docRef.id }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "An unknown error occurred" }), {
            status: 500,
        });
    }
};
