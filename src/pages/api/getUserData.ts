import type { APIRoute } from "astro";
import fetch from "node-fetch";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const accessCode = url.searchParams.get("accessCode");

  if (!accessCode) {
    return new Response(
      JSON.stringify({ message: "Access code is required" }),
      {
        status: 400,
      }
    );
  }

  try {
    // Exchange the access code for an access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: "YOUR_CLIENT_ID",
        client_secret: "YOUR_CLIENT_SECRET",
        code: accessCode,
      }),
    });

    const { access_token } = await tokenResponse.json();

    // Use the access token to fetch the user's details
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data from GitHub API");
    }

    const userData = await userResponse.json();
    const username = userData.login;

    return new Response(JSON.stringify({ username }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
    );
  }
};
