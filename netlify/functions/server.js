import serverHandler from "../../server";

export async function handler(event, context) {
  const request = new Request(
    event.rawUrl || `https://${event.headers.host || "localhost"}${event.path || "/"}`,
    {
      method: event.httpMethod,
      headers: event.headers || {},
      body: event.body,
    }
  );

  const response = await serverHandler.fetch(request, {}, {});

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
    isBase64Encoded: false,
  };
}