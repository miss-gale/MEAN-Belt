export class Review {
  id: number;
  author: string;
  stars: number;
  review: string;

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }
}
