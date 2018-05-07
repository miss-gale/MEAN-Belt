import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MovieService } from "./services/movie.service";
import { AppRoutingModule } from "./app-routing.module";
import { NavComponent } from "./nav/nav.component";

import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieReviewsComponent } from "./movies/movie-reviews/movie-reviews.component";
import { MovieNewComponent } from "./movies/movie-new/movie-new.component";
import { ReviewNewComponent } from "./movies/review-new/review-new.component";

import { Movie } from "./movie";
import { Review } from "./review";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieReviewsComponent,
    MovieNewComponent,
    ReviewNewComponent,
    NavComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
