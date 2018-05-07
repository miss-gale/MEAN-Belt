const Movie = require("mongoose").model("Movie");
const Review = require("mongoose").model("Review");

module.exports = {
  index(request, response) {
    Movie.find({})
      .then(movies => response.json(movies))
      .catch(console.log);
  },
  show(request, response) {
    Movie.findById(request.params.movieID)
      .then(movie => response.json(movie))
      .catch(console.log);
  },
  update(request, response) {
    Movie.findById(request.params.movieID, request.body, { new: true })
      .then(movie => reponse.json(movie))
      .catch(console.log);
  },
  create(request, response) {
    Movie.create(request.body)
      .then(movie => response.json(movie))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.json(errors);
      });
  },
  destroy(request, response) {
    Movie.findByIdAndRemove(request.params.movieID)
      .then(movie => response.json(movie))
      .catch(console.log);
  }
};
