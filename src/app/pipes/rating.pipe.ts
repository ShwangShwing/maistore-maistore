import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(ratings: any[]): string {
    if (!ratings || ratings.length <= 0) {
      return '0.0 / 5 (0 ratings)';
    }

    const ratingSum = ratings.reduce((prev, cur) => prev + cur.rating, 0);
    const averageRating = ratingSum / ratings.length;
    return `${averageRating.toFixed(2)} / 5 (${ratings.length} ratings)`;
  }

}
