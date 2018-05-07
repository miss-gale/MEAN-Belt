import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Movie } from "../movie";
import { Review } from "../review";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { createComponentView } from "@angular/core/src/view/view";

@Injectable()
export class MovieService {
  private base = "/api/movies";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.base);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.base, movie);
  }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.base, review);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.base}/${movie.id}`);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.base}/${id}`);
  }

  getReviews(): Observable<Review> {
    return this.http.get<Review>(`${this.base}`);
  }
}
