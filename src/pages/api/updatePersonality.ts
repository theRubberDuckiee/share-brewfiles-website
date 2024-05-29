import type { APIRoute } from "astro";
import { db } from "@/firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import isValidBrewfile from "@/lib/validateBrewfileData";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { personalitySummary, id } = await request.json();
    const singleBrewDoc = await getDoc(doc(db, "brewfiles", id));
    if (singleBrewDoc.exists()) {
      if (
        isValidBrewfile(singleBrewDoc.data(), {
          checkPersonalitySummary: false,
        })
      ) {
        throw new Error("No single brew found");
      }
      await updateDoc(doc(db, "brewfiles", id), {
        data: singleBrewDoc.data().data,
        date: singleBrewDoc.data()?.date,
        userInfo: singleBrewDoc.data()?.userInfo,
        personalitySummary: personalitySummary,
      });
    }
    return new Response(
      JSON.stringify({ success: true, id: singleBrewDoc.id, updated: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
