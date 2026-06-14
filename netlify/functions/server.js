let serverHandler;

async function getServerHandler() {
  if (!serverHandler) {
    serverHandler = (await import("../../dist/server/server")).default;
  }
  return serverHandler;
}

export async function handler(event, context) {
  const handler = await getServerHandler();
  
  const hasBody = event.httpMethod !== "GET" && event.httpMethod !== "HEAD";
  const rawBody = hasBody && event.body 
    ? (event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body)
    : undefined;
  
  const request = new Request(
    event.rawUrl || `https://${event.headers.host || "localhost"}${event.path || "/"}`,
    {
      method: event.httpMethod,
      headers: event.headers || {},
      body: rawBody,
    }
  );

  const response = await handler.fetch(request, {}, {});

  const responseBody = await response.text();
  const isBase64 = response.headers.get("content-type")?.includes("image/") || false;
  
  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: responseBody,
    isBase64Encoded: isBase64,
  };
}