// tslint:disable-next-line: comment-format
// BASE SETUP
// =============================================================================

// call the packages we need
import * as express from "express";
import * as bodyParser from "body-parser";

let port = process.env.PORT || 8080;        // set our port

// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
// var Wines     = require('./models/wines');

export class Server {
    // define our app using express
    app: express.Application;
    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        // configure app to use bodyParser()
        // this will let us get the data from a POST
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    /**
     * Register routes
     */
    private routes(): void {

        let router = express.Router();              // get an instance of the express Router

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
        this.app.use('/api', router);
    }
    /**
     * Run the server
     */
    public run(): void {
        this.routes();
        // START THE SERVER
        this.app.listen(port);
        console.log('Listening on port ' + port);
    }
}


