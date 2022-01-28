// before using express.js

// const http = require('http');

// const hostName = 'localhost';
// const port = 8000;

// const chandu = http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello from Chandu!');
//     response.end();
// })

// chandu.listen(port, hostName);

// console.log("Hello Chandu!");

// after adding express.js

const express = require('express');
const port = 5000;
const app = express();
const router = express.Router();

// app.get('/', function(request, response) {
//     response.send("Hello from Chandra Varma - via express.js");
// });

// app.listen(port, function(){
//     console.log('listenting to ' + port + ', acknowledged');
// });

// same above function using arrow function

app.use(express.json());
app.use(express.urlencoded({extended:false}));

router.get('/', (request, response) => {
    response.send("Hello from Chandra Varma - via express.js");
});

router.get('/aboutus', function(req, res){
	res.send("You are on the about us  route");
});


router.post('/addweight', function(request, response) {
    let empName = request.body.empName;
    let empWeight = request.body.empWeight;
    response.end(`POST req made, I got ${empName} and ${empWeight}, thankyou`);
});

app.use('/', router);
app.listen(port, () =>     console.log('listenting to ' + port + ', acknowledged') );

