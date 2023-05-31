const url = Deno.args[0];
console.log(`watch URL ${url}`);
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());

await Deno.stdout.write(body);
console.log(url, res, body, "{url, res, body}");