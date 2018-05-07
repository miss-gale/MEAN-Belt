import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Movie } from "../../movie";
import { Review } from "../../review";
import { MovieService } from "../../services/movie.service";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-review-new",
  templateUrl: "./review-new.component.html",
  styleUrls: ["./review-new.component.css"]
})
export class ReviewNewComponent implements OnInit {
  review: Review = new Review();
  movie: Movie;

  @Output() createMovie = new EventEmitter<Movie>();

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.movieService.getMovie(params.get("movieID")))
      .subscribe(movie => {
        console.log("Got a movie!", movie);
        this.movie = movie;
      });
  }

  onSubmit(form: NgForm) {
    console.log("Review form has been submitted!", this.review, form);

    this.movieService.createReview(this.review).subscribe(review => {
      this.router.navigateByUrl("/");
      this.review = new Review();
    });

    form.reset();
  }
}
