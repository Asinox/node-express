// Load HTTP module
var http = require('http');

// Create a HTTP server and listen on port 8000 for resquest
http.createServer(function(request, response){

    // Set the response HTTP header with HTTP status and Content Type
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response to the body
    response.end('Hello World\n');

}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');