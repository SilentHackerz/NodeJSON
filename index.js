const express = require("express");
const app = express();
const request = require("request");
const _ = require("underscore");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

app.get("/users", function(req, res) {
  request("https://jsonplaceholder.typicode.com/users", function(
    error,
    response,
    body
  ) {
    res.send(body);
  });
});

app.get("/users/user", function(req, res) {
  request("https://jsonplaceholder.typicode.com/users", function(
    error,
    response,
    body
  ) {
    const users = JSON.parse(body);
    let filtered = _.where(users, { name: "Leanne Graham" });
    res.send(filtered);
  });
});
