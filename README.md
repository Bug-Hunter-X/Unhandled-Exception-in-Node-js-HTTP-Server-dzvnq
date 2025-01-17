# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions within HTTP servers.  The `bug.js` file shows an example where an exception is thrown without proper error handling, causing the server to crash.  `bugSolution.js` provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`. Observe the server crash.
4. Run `node bugSolution.js`. Observe the server gracefully handling the error.