/* Required libraries */
const bodyParser = require("body-parser");
const router = require("./router");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

/*****************************/

/* Express istance */

const app = express();

/*****************************/

/*
 * Concise output colored by response status for development use. The :status token will be colored green for success codes, red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes.
 *
 * */
app.use(morgan("dev"));

/*****************************/

/*
 * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 *
 * */
app.use(cors());

/*****************************/

/*
 * Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 *
 * */
app.use(bodyParser.json()); /* Use Json as req format */
app.use(bodyParser.urlencoded({ extended: true })); /* Encode the urls */
/* https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded */

/*****************************/


app.use(express.json());
/* This is a built-in middleware function in Express. It parses incoming requests with JSON
  * payloads and is based on body-parser
  * */
app.use(express.urlencoded({ extended: true }));
/* Enconde the urls */
app.use(express.static(path.join(__dirname, "public")));

/*****************************/

app.use("/api", router);
/* This mounts the middleware at path "/api", then router.get sets the subpath accordingly*/

/*****************************/

app.set("port", process.env.PORT || 3001 || 3002);
/* Usefull in Heroku and deployed environmets, see also
  * https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
  * */

/*****************************/

/* This means testing environmet */
if (process.env.NODE_ENV !== "test") {
  app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port") + " on dev");
  });
}

module.exports = app;
