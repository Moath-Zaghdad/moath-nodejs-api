const express = require("express")
const mongoose = require('mongoose');
const productRoutes = require('./router');

var app = express()

app.use(express.json());


// Routes
app.use('/api', productRoutes);

app.get("/", function(request, response) {
  response.send("Hello World!")
})

app.get("/info", function(request, response) {
  response.send({
    message: "Welcome to HealthStore application.",
    id: "165"
  })
})

app.listen(10000, function() {
  console.log("Started application on port %d", 10000)
});
