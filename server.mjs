import { createServer } from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from './api/send_message.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer(async (req, res) => {
  // CORS setup just in case
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/api/send_message') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', async () => {
      req.body = body ? JSON.parse(body) : {};
      
      const vRes = {
        status: (code) => {
          res.statusCode = code;
          return vRes;
        },
        json: (data) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        }
      };
      
      await handler(req, vRes);
    });
    return;
  }

  // Basic static file serving
  try {
    const filePath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    const fullPath = path.join(__dirname, filePath);
    const data = await readFile(fullPath);
    
    if (filePath.endsWith('.html')) res.setHeader('Content-Type', 'text/html');
    else if (filePath.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
    else if (filePath.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript');
    
    res.end(data);
  } catch(e) {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('\\n🚀 API Server is running!');
  console.log('👉 Open http://localhost:3000 in your browser to test the contact form.\\n');
});
