module.exports = function(router){
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
}