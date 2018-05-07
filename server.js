const express = require("express");

const path = require("path");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "dist")));

require("./server/config/database");
app.use("/api", require("./server/config/routes"));
app.use(require("./server/config/routes/catch-all.route"));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/users", function(req, res) {
  console.log("POST DATA", req.body);

  res.redirect("/");
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
