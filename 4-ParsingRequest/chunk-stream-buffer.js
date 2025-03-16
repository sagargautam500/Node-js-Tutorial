// In Node.js, when handling HTTP requests, data does not arrive all at once but in chunks. Here’s how parsing works in terms of chunk, stream, and buffer:

// 1. Chunk
// A chunk is a small piece of data received from a stream.
// When a client sends data (like form submissions or JSON payloads), Node.js processes it in small chunks rather than loading everything into memory at once.

// 2. Stream
// Streams are a way to handle data piece by piece instead of loading the entire dataset at once.
// The HTTP request (req) object in Node.js is a readable stream, meaning data arrives in chunks over time.
// You can listen to stream events like:
// data → triggered when a chunk is received.
// end → triggered when all data is received.

// 3. Buffer
// A buffer is a temporary memory location used to store chunks before processing.
// In Node.js, buffers help in handling binary data efficiently.

// Example: Handling Incoming Data
const http = require("http");

const server = http.createServer((req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk; // Collecting chunks in a buffer
  });

  req.on("end", () => {
    console.log("Received Data:", body); // Final parsed data
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Data received successfully");
  });
});

server.listen(3000, () => console.log("Server running on  http://localhost:3000"));
// How It Works
// The req.on("data") event collects incoming data in chunks.
// The chunk is appended to a string (or buffer for binary data).
// The req.on("end") event signals when all data is received, and we can process the complete request.