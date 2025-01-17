const http = require('http');

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello World!');
    //Simulate an error
    throw new Error('Something went wrong!');
  } catch (err) {
    console.error('An error occurred:', err);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
