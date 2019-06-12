// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
require("dotenv").config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "public/contact.html"));
  });
  
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });