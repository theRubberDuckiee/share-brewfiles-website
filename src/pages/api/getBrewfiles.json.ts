export const prerender = false;

import { db } from "@/firebase/config";
import type { BrewEntry, BrewsItem } from "@/types/brews";
import type { APIRoute } from "astro";
import { getDoc, collection, doc, getDocs } from "firebase/firestore";

export const GET: APIRoute = async ({ request }) => {
  // get searchParams from request
  const id = new URL(request.url).searchParams.get("id");

  try {
    // optionally get a single brew if an id is passed in
    if (id) {
      const singleBrewDoc = await getDoc(doc(db, "brewfiles", id));
      if (singleBrewDoc.exists()) {
        // check to make sure .data exists
        if (!singleBrewDoc.data()?.data) {
          throw new Error("No single brew found");
        }
        return new Response(
          JSON.stringify({
            brews: [
              {
                id: singleBrewDoc.id,
                data: Object.values(
                  singleBrewDoc.data().data as BrewEntry[]
                ).map((value) => {
                  return {
                    name: value.name,
                    packageManager: value.packageManager,
                  };
                }),
                date: singleBrewDoc.data().date,
                userInfo: singleBrewDoc.data().userInfo,
              },
            ],
          })
        );
      } else {
        throw new Error("No single brew found");
      }
    } else {
      // get all brewfiles uploaded otherwise
      const allBrews = await getDocs(collection(db, "brewfiles"));

      if (allBrews) {
        const brews = allBrews.docs.map((doc) => {
          const { data, date, userInfo } = doc.data();
          if (!data || !date || !userInfo) {
            // ignore result if it doesn't have all three items
            return;
          }
          const brewData = Object.values(data as BrewEntry[]).map((value) => {
            return {
              name: value.name,
              packageManager: value.packageManager,
            };
          });
          return {
            id: doc.id,
            data: brewData,
            date,
            userInfo,
          };
        }) as BrewsItem[];
        return new Response(JSON.stringify({ brews: brews }));
      } else {
        throw new Error("No brews found");
      }
    }
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(JSON.stringify({ message: e.message }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ message: "No brews found" }), {
      status: 404,
    });
  }
};
