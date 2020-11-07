/**
 * example permission in deno using API
 * and running in serve deno : deno run --allow-net index.js
 *  */ 

import {serve} from "https://deno.land/std@0.76.0/http/server.ts"; // Deno serve
import {format} from "https://deno.land/x/date_fns/index.js"; // import library dateformat
import {config} from "https://deno.land/x/dotenv/mod.ts"; // import library dotenv
const url = 'http://hn.algolia.com/api/v1/search?query=javascript'; // Algolia API
const server = serve({
    port: parseInt(config()['PORT']),
}); // running on port 8000

for await (const req of server) {
    const result = await fetch(url).then((result) => result.json());
    const stories = result.hits.map((hit) => ({
        title: hit.title,
        url: hit.url,
        createAt: format(
            new Date(hit.created_at_i * 1000), 'yyyy-MM-dd' 
            ),
        author: hit.author,
        totalComment: hit.num_comments,
    }));

    req.respond({
        body: JSON.stringify(stories),
    });

}