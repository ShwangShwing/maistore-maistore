import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(ratings: any[]): string {
    if (!ratings) {
      return '0.0 / 5 (0 ratings)';
    }

    let ratingSum = 0;
    let ratingCount = 0;
    for (const userId in ratings) {
      if (ratings.hasOwnProperty(userId)) {
        ratingSum += +ratings[userId].rating;
        ratingCount++;
      }
    }

    const averageRating = ratingSum / ratingCount;

    return `${averageRating.toFixed(2)} / 5 (${ratingCount} ratings)`;
  }

}
