import axios from 'axios';
import { useEffect, useState } from 'react';

import useReviewSection from '../../../hooks/useReviewSection';


const Reviews = (props) => {
    const user = props.user

    const productId = props.productId;
    const [reviews, setReviews] = useState(false);

    async function getProductReviews(productId) {
        console.log(productId);
        let response = await axios.get(`https://localhost:44394/api/reviews/${productId}`);
        if (response.status === 200) {
            setReviews(response.data);
        }
    }

    const getForm = useReviewSection(productId, user);

    useEffect(() => {
        getProductReviews(productId);
    }, [])

    if (!(reviews.length >= 0)) {
        return <h1>Gathering reviews...</h1>
    } else {
        let totalReviewPoints = 0;
        let totalPossiblePoints = 0;
        if (reviews.length >= 1) {
            const formattedReviews = reviews.map((review) => {
                totalPossiblePoints += 5;
                totalReviewPoints += review.rating;
                return (
                    <div>
                        <h3>{review.rating}/5</h3>
                        <h4>{review.body}</h4>
                    </div>
                )
            })
            const overallRating = ( totalReviewPoints / totalPossiblePoints) * 5;
            return (
                <div>
                    {getForm()}
                    <h2>Overall Rating: {overallRating}/5</h2>
                    {formattedReviews}
                </div>
            )
        } else {
            return (
                <div>
                    <h2>No reviews yet.</h2>
                    {getForm()}
                </div>
            )
        }
    }
}

export default Reviews;