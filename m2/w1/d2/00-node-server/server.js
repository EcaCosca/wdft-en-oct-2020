const http = require("http");
const fs = require('fs');

//  www.example.com/
//  www.example.com/about

// Create the server
// What server should do:
const server = http.createServer( (request, response) => {
  console.log("Request reached the server!!!");

  if (request.url === "/index.html") {

    // `__dirname` is a NodeJS value representing the full path of the executed file 
    // Loading the file and sending the file 
    fs.readFile( __dirname + "/index.html", 'utf8', (error, loadedFile) => {
      response.write(loadedFile); 
      response.end();
    })
  }

  else if ( request.url === '/about.html') { 
    // Loading the file and sending the file 
    fs.readFile( __dirname + "/about.html", 'utf8', (error, loadedFile) => {
      response.write(loadedFile); 
      response.end();
    })
  }
  
  else {
    response.statusCode = 404;
    response.write('404 Page');
    response.end();
  }

});



// Start the server
server.listen(3000, () => {
  console.log("Server is running");
});

// Ports range 0 - 65535
// Reserved (well known ports) 0 - 1023