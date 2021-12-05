var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var ballondorRouter = require("./routes/ballondor");

var app = express();

var server = app.listen(8080, function() {
    console.log('Ready on port %d', server.address().port);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/ballondor", ballondorRouter);
app.use("/", indexRouter);


module.exports = app;
