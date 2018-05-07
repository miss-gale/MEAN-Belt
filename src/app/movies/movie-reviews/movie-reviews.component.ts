import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Movie } from "../../movie";
import { Review } from "../../review";
import { MovieService } from "../../services/movie.service";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-movie-reviews",
  templateUrl: "./movie-reviews.component.html",
  styleUrls: ["./movie-reviews.component.css"]
})
export class MovieReviewsComponent implements OnInit {
  reviews: Review;
  selectedMovie: Movie;
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.movieService.getMovie(params.get("movieID")))
      .subscribe(movie => {
        console.log("Got a movie!", movie);
        this.movie = movie;
        this.movieService.getReviews().subscribe(reviews => {
          console.log(reviews);
          this.reviews = reviews;
        });
      });
  }
}
