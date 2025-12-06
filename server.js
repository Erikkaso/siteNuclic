// Simple HTTP server to serve static files and expose the send-email API.
// This server is intended for local development/testing only.
const http = require('http');
const fs = require('fs');
const path = require('path');

const sendEmailHandler = require('./api/send-email.js');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  // Serve API endpoint
  if (req.url.startsWith('/api/send-email')) {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Method not allowed' }));
      return;
    }

    // Collect request body
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        const parsed = JSON.parse(body || '{}');
        const reqObj = { method: 'POST', body: parsed };
        const resObj = {
          status(code) {
            res.statusCode = code;
            return this;
          },
          setHeader(key, value) {
            res.setHeader(key, value);
            return this;
          },
          json(obj) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(obj));
          }
        };
        await sendEmailHandler(reqObj, resObj);
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid request' }));
        console.error(err);
      }
    });
    return;
  }

  // Otherwise serve static files
  let filePath = '.' + decodeURIComponent(req.url);
  if (filePath === './' || filePath === './index') {
    filePath = './index.html';
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(content);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});