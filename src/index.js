export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return new Response("Send environment variables via POST.\n", { status: 405 });
    }

    const body = await request.text();
    console.log("=== Environment Variables ===");
    console.log(body);
    console.log("=== End ===");

    return new Response("OK\n");
  },
};
