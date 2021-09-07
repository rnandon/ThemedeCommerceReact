import axios from 'axios';


const Reviews = (props) => {
    const productId = props.productId;

    async function getProductReviews(productId) {
        console.log(productId);
        try {
            let response = await axios.get(`https://localhost:44394/api/reviews/${productId}`);
            return response.data;
        } catch (ex) {
            console.log("No Data Found");
        }
    }

    const reviews = getProductReviews(productId);

    const productReviews = reviews.map((item) => {
        const review = {
            rating: item.rating,
            body: item.body,
        };

        return (
            <div>
                {productReviews}
                <p>{review.rating}</p>
                <p>{review.body}</p>
            </div>
        )
    });
}

export default Reviews;