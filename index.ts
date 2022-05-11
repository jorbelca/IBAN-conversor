// import { serve } from "https://deno.land/std/http/server.ts";

// serve((req) => new Response("Hello World\n"));

function entryCount() {
  const count = prompt("Count number ...")
  console.log({ count })
}

entryCount()
