import type { APIRoute } from "astro";
import { db } from "@/firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { search, type } = await request.json();
    if (!search || typeof search !== "string") {
      throw new Error("No search term provided");
    }

    if (!type && (type !== "search" || type !== "route")) {
      throw new Error("No search type provided");
    }

    const collectionRef = collection(db, "searchLogs");

    await addDoc(collectionRef, {
      search,
      type,
      date: Timestamp.now(),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : error,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
