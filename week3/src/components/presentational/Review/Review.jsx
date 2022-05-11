import StarRating from "../../container/StarRating/StarRating";

const Review = ({review}) => {
    // note: slice(0,10) to not display time in date

    return (
        <li>
            <span className="review-user-info">{review.user} ({review.date.slice(0, 10)}):</span>
            <StarRating stars={review.stars} />
            <p className="review">{review.comment}</p>
        </li>
    );
}

export default Review;