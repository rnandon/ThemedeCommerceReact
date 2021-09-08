import { useState, useEffect } from 'react';
import axios from 'axios';


const useReviewSection = (productId, user) => {

    const [reviewComment, setReviewComment] = useState("");
    let rating = 5;

    const handleChange = (number) => {
        rating = number;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const review = {
            "Body": reviewComment,
            "Rating": rating,
            "ProductId": parseInt(productId),
            "UserId": user.id
        }
        const url = `https://localhost:44394/api/reviews`;
        const auth = { headers: { Authorization: `Bearer ${token}` }}
        postRating(url, review, auth)

    }

    async function postRating(url, review, auth) {
        try {
            let response = await axios.post(url, review, auth);
        } catch (ex) {
            console.log("Failed to publish review.");
        }
    }

    const getForm = () => {
        return (
            <form onSubmit={handleSubmit} >
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" onClick={handleChange(1)} />
                    <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" onClick={handleChange(2)} />
                    <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" onClick={handleChange(3)} />
                    <label class="form-check-label" for="inlineRadio3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" onClick={handleChange(4)} />
                    <label class="form-check-label" for="inlineRadio4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" onClick={handleChange(5)} />
                    <label class="form-check-label" for="inlineRadio5">5</label>
                </div>
                <div>
                    <label className="form-text-label" for="reviewCommentInput">Add a review:</label>
                    <input className="text" type="text" name="reviewCommentInput" id="reviewCommentInput" value={reviewComment} onChange={(event) => setReviewComment(event.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }


    return getForm;
}

export default useReviewSection;