export const prerender = false;

import { db } from "@/firebase/config";
import totalBrewData from "@/lib/totalBrewData";
import type { BrewEntry, Brews, BrewsItem } from "@/types/brews";
import type { APIRoute } from "astro";
import { getDoc, collection, doc, getDocs } from "firebase/firestore";

export const GET: APIRoute = async ({ request }) => {
  // get searchParams from request
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const showOnlyTop10 = url.searchParams.get("showOnlyTop10");
  const getTotals = url.searchParams.get("getTotals");

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
    const brews = allBrews.docs.map((doc) => {
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
    }) as BrewsItem[];

    if (getTotals) {
      const totalData = totalBrewData(
        brews.map((brew) => brew.data).flat(),
        showOnlyTop10 === "true"
      );
      return new Response(JSON.stringify(totalData));
    }
    return new Response(JSON.stringify({ brews: brews }));
  } else {
    return new Response(JSON.stringify({ message: "No brews found" }), {
      status: 404,
    });
  }
};
