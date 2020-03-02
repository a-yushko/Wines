// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

//var mongoose   = require('mongoose');
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
var Wines     = require('./models/wines');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    // do logging
    console.log(`Received request: ${req.method} ${req.url}`);
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

router.route('/wines')

    // create a bear (accessed at POST http://localhost:8080/api/wines)
    .post(function(req, res) {
        res.json({ message: 'Wine created!' });
        res.status(200);
        //TODO: save to database
    })
    
    .get(function(req, res) {
        res.json({ message: 'Wines will go here!' });
    });

router.route('/wines/:wine_id')

    // get the wine with that id (accessed at GET http://localhost:8080/api/wines/:wine_id)
    .get(function(req, res) {
        // TODO: find and return a wine
        res.json({ mesage: `Wine with id ${req.params.wine_id}`});
    })
    
    .put(function(req, res) {
        // TODO: finde the wine and update it
        res.json({ message: `Wine ${req.params.wine_id} updated!` });
    })
    
    .delete(function(req, res) {
        // TODO: delete the wine
        res.json({ message: `Successfully deleted wine ${req.params.wine_id}` });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port ' + port);
