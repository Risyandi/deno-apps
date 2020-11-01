import {serve} from "https://deno.land/std@0.76.0/http/server.ts";
const s = serve({port: 3000})

console.log("http://localhost:3000");

for await (const req of s){
    req.respond({ body: "hello world!"});
}