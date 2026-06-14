let serverHandler;

async function getServerHandler() {
  if (!serverHandler) {
    serverHandler = (await import("../../dist/server/index")).default || (await import("../../dist/server/index")).handler;
  }
  return serverHandler;
}

export async function handler(event, context) {
  const handler = await getServerHandler();
  
  const request = new Request(
    event.rawUrl || `https://${event.headers.host || "localhost"}${event.path || "/"}`,
    {
      method: event.httpMethod,
      headers: event.headers || {},
      body: event.body,
    }
  );

  const response = await handler.fetch(request, {}, {});

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
    isBase64Encoded: false,
  };
}