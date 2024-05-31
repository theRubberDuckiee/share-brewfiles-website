import type { APIRoute } from "astro";

const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { code } = await request.json();
    if (!code) {
      throw new Error("No code was given!");
    }
    
    const response = await fetch(`https://github.com/login/oauth/access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          client_id: "6db8c19033a30994dffa",
          client_secret: GITHUB_CLIENT_SECRET,
          code: code
        })
      });
      
      if (!response.ok) {
        throw new Error("We failed to fetch your user information from the GitHub API.");
      }
      
    const responseData = await response.json();
    const accessToken = responseData.access_token;
    
    return new Response(
        JSON.stringify({ success: true, access_token: accessToken, updated: true }),
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
