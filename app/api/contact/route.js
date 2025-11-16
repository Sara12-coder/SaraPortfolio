export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        access_key: process.env.WEB3FORMS_KEY
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server Error", error }),
      { status: 500 }
    );
  }
}
