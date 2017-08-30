const calculateAverageRating = (userRatings): number => {
    let avgRating = 0;

    if (this.userRatings.length > 0) {
        let ratingSum = 0;
        for (const userId in this.userRatings) {
            if (this.userRatings.hasOwnProperty(userId)) {
                ratingSum += this.userRatings[userId].rating;
            }
        }

        avgRating = ratingSum / this.userRatings.length;
    }

    return avgRating;
};

export { calculateAverageRating };
