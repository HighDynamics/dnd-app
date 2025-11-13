#!/usr/bin/env node
const path = require("path");
const http = require("http");
const fs = require("fs");

const BUILD_DIR = path.join(__dirname, "..", "build");
const PORT = process.env.PORT ? Number(process.env.PORT) : 5100;
const BASE = process.env.BASE_PATH || "/dnd-app/";

function sendFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }
    res.setHeader("Content-Type", contentType);
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let url = req.url || "/";
  if (!url.startsWith(BASE)) {
    res.statusCode = 302;
    res.setHeader("Location", BASE);
    res.end();
    return;
  }

  let relPath = url.slice(BASE.length - 1) || "/";
  if (relPath === "/") relPath = "/index.html";

  const filePath = path.join(BUILD_DIR, relPath);
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".webmanifest": "application/manifest+json",
  };

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      sendFile(res, filePath, map[ext] || "application/octet-stream");
      return;
    }

    const indexPath = path.join(BUILD_DIR, "index.html");
    sendFile(res, indexPath, "text/html; charset=utf-8");
  });
});

server.listen(PORT, () => {
  console.log(`Serving build at http://localhost:${PORT}${BASE}`);
});
