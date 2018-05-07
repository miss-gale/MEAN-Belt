import { Review } from "./review";

export class Movie {
  id: number;
  title: string;
  author: string;
  stars: number;
  review: string;

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }
}
