import { Component, OnInit } from "@angular/core";
import { Movie } from "../../movie";
import { Review } from "../../review";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent {
  movies: Movie[] = [];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    });
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = this.selectedMovie === movie ? null : movie;
    console.log("Selected movie: ", this.selectedMovie);
  }

  onCreate(event: Movie) {
    console.log("Creating a new movie! ", event);
    this.movies.push(event);
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  onDelete(movie: Movie) {
    console.log("Deleting this movie. ", movie);

    this.movieService.deleteMovie(movie).subscribe(returnedMovie => {
      console.log(returnedMovie);
      this.movies = this.movies.filter(m => m.id !== returnedMovie.id);
    });
  }
}
