const movieRouter = require("./movie.routes");
const router = require("express").Router();

module.exports = router.use("/movies", movieRouter);
