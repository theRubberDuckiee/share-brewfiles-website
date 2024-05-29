export const prerender = false;

import { db } from "@/firebase/config";
import totalBrewData from "@/lib/totalBrewData";
import isValidBrewfile from "@/lib/validateBrewfileData";
import type { BrewEntry, Brews, BrewsItem } from "@/types/brews";
import type { APIRoute } from "astro";
import { collection, getDocs } from "firebase/firestore";

export const GET: APIRoute = async ({ request }) => {
  // optional param to get only the top 10
  const showOnlyTop10 = new URL(request.url).searchParams.get("showOnlyTop10");

  try {
    const allBrews = await getDocs(collection(db, "brewfiles"));

    if (allBrews) {
      const brews = allBrews.docs.map((doc) => {
        const rawData = doc.data();

        const { data } = rawData;
        if (!data) {
          return;
        }

        if (!isValidBrewfile(doc.data())) {
          return;
        }

        const brewData = Object.values(data as BrewEntry[]).map((value) => {
          return {
            name: value.name.replaceAll(",", ""),
            packageManager: value.packageManager,
          };
        });
        return {
          id: doc.id,
          data: brewData,
        };
      }) as BrewsItem[];

      const totalData = totalBrewData(
        brews.map((brew) => brew.data).flat(),
        showOnlyTop10 === "true"
      );

      return new Response(JSON.stringify(totalData));
    } else {
      return new Response(JSON.stringify({ message: "No brews found" }), {
        status: 404,
      });
    }
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return new Response(JSON.stringify({ message: e.message }), {
        status: 404,
      });
    }
    return new Response(
      JSON.stringify({ message: "An unknown error occurred" }),
      {
        status: 404,
      }
    );
  }
};
