import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Movie } from "../../movie";
import { Review } from "../../review";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-movie-new",
  templateUrl: "./movie-new.component.html",
  styleUrls: ["./movie-new.component.css"]
})
export class MovieNewComponent implements OnInit {
  movie: Movie = new Movie();

  @Output() createMovie = new EventEmitter<Movie>();

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("Movie form has been submitted!", this.movie, form);

    this.movieService.createMovie(this.movie).subscribe(movie => {
      this.router.navigateByUrl("/");
      this.movie = new Movie();
    });

    form.reset();
  }
}
