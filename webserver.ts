import { serve } from "https://deno.land/std@0.165.0/http/server.ts";
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("./index.html");

const port = 8080;

const handler = (request: Request): Response => {
  const headers = new Headers();
  headers.append(
    "Content-Security-Policy",
    "connect-src 'self'; script-src 'self' 'unsafe-inline'; report-uri https://testapi.com/post"
  );

  return new Response(data, { status: 200, headers });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
