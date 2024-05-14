import type { APIRoute } from 'astro';
import { db } from '@/firebase/config';
import { collection, query, where, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore';
import type { UserInfo } from '@/types/brews';
import { generatePersonality } from '@/lib/generatePersonality';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { brewfileData, accessToken } = await request.json();
        if (!accessToken) {
            throw new Error('Access token is empty!');
        }

        const response = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('We failed to fetch your user information from the GitHub API.');
        }

        const completeUserInfo = await response.json();
        const userInfo: UserInfo = {
            username: completeUserInfo.login,
            imageUrl: completeUserInfo.avatar_url,
            profileUrl: completeUserInfo.url,
            isFeatured: false,
        }

        if (!userInfo || !userInfo.username) {
            throw new Error('The user information we got from Github API is invalid.');
        }

        const collectionRef = collection(db, 'brewfiles');
        const getCurrentDate = () => new Date().toISOString();

        const q = query(collectionRef, where("userInfo.username", "==", userInfo.username));

        const existingDocs = await getDocs(q);

        if (!existingDocs.empty) {
            const existingDoc = existingDocs.docs[0];
            await updateDoc(doc(db, 'brewfiles', existingDoc.id), {
                data: brewfileData,
                date: getCurrentDate(),
                userInfo: userInfo
            });
            generatePersonality(brewfileData, existingDoc.id)
            return new Response(JSON.stringify({ success: true, id: existingDoc.id, updated: true }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } else {
            const docRef = await addDoc(collectionRef, {
                data: brewfileData,
                date: getCurrentDate(),
                userInfo: userInfo,
            });
            generatePersonality(brewfileData, docRef.id)
            return new Response(JSON.stringify({ success: true, id: docRef.id, created: true }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};
