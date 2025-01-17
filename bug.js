const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World!');

  // Error not handled
  throw new Error('Something went wrong!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});