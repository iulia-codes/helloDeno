import {serve} from "https://deno.land/std/http/server.ts";

let s = serve(":5000");

console.log("listening on port :5000");

for await (const req of s) {
    req.respond({ body: "Hello, Deno! 🦕 \n" });
  }

