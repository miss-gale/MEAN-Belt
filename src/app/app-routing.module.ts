import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieReviewsComponent } from "./movies/movie-reviews/movie-reviews.component";
import { MovieNewComponent } from "./movies/movie-new/movie-new.component";
import { ReviewNewComponent } from "./movies/review-new/review-new.component";

const routes: Routes = [
  {
    path: "",
    component: MovieListComponent
  },
  {
    path: "movies/new",
    component: MovieNewComponent
  },
  {
    path: "movies/:movieID",
    component: MovieReviewsComponent
  },
  {
    path: "movies/reviews/:movieID",
    component: ReviewNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
