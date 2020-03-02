# About

*Based on https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4*

I'm going to build an API that will:

* Handle CRUD for an item (we're going to use wines)
* Have a standard URL (http://example.com/api/wines and http://example.com/api/wines/:wine_id)
* Use the proper HTTP verbs to make it RESTful (GET, POST, PUT, and DELETE)
* Return JSON data
* Log all requests to the console

# Routes

Route 	            |HTTP Verb |Description 
------------------- |--- | ----------------------
/api/wines          |GET |      Get all the wines.
/api/wines          |POST|	    Add wine.
/api/wines/:wine_id |GET |      Get a single wine details.
/api/wines/:wine_id	|PUT |      Update wine with new info.
/api/wines/:wine_id	|DELETE |   Delete wine.

# Examples

GET http://localhost:8080/api/wines

POST http://localhost:8080/api/wines

GET http://localhost:8080/api/wines/:wine_id

PUT http://localhost:8080/api/wines/:wine_id

DELETE http://localhost:8080/api/wines/:wine_id

(c) Aleksey Yushko, 2020
