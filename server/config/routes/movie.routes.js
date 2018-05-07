const movieController = require("../../controllers/movies");

const router = require("express").Router();

router
  .get("/", movieController.index)
  .post("/", movieController.create)
  .get("/:movieID", movieController.show)
  .put("/:movieID", movieController.update)
  .delete("/:movieID", movieController.destroy);

module.exports = router;
