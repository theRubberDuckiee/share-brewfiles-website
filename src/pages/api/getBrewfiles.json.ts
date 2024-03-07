import { db } from "@/firebase/config";
import type { BrewEntry } from "@/types/brews";
import type { APIRoute } from "astro";
import { getDoc, collection, doc, getDocs } from "firebase/firestore";

export const GET: APIRoute = async ({ request }) => {
  // get searchParams from request
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  console.log("🚀 ~ constGET:APIRoute= ~ id:", id);

  // optionally filter per param
  if (id) {
    const singleBrewDoc = await getDoc(doc(db, "brewfiles", id));
    if (singleBrewDoc.exists()) {
      // check to make sure .data exists
      if (!singleBrewDoc.data()?.data) {
        return new Response(JSON.stringify({ message: "Brewfile not found" }), {
          status: 404,
        });
      }
      return new Response(
        JSON.stringify({
          brews: [
            {
              id: singleBrewDoc.id,
              data: Object.values(singleBrewDoc.data().data as BrewEntry[]).map(
                (value) => {
                  return {
                    name: value.name,
                    packageManager: value.packageManager,
                  };
                }
              ),
            },
          ],
        })
      );
    } else {
      return new Response(JSON.stringify({ message: "Brewfile not found" }), {
        status: 404,
      });
    }
  }

  const allBrews = await getDocs(collection(db, "brewfiles"));

  if (allBrews) {
    return new Response(
      JSON.stringify({
        brews: allBrews.docs.map((doc) => {
          const rawData = doc.data();
          // check that data actually exists
          const { data } = rawData;
          if (!data) {
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
          };
        }),
      })
    );
  } else {
    return new Response(JSON.stringify({ message: "No brews found" }), {
      status: 404,
    });
  }
};
