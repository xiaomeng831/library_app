import { useState } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview: any }> = (props) => {

    const [startInput, setStartInput] = useState(0);
    const [displayInput, setDisplayInput] = useState(false);
    const [reviewDescription, setReviewDescription] = useState('');

    const starValue = (value: number) => {
        setStartInput(value);
        setDisplayInput(true);
    }

    return (
        <div className="dropdown" style={{ cursor: 'pointer' }}>
            <h5 className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle='dropdown'>
                Leave a review?
            </h5>
            <ul className="dropdown-menu" id="submitReviewRating" aria-labelledby="dropdownMenuButton1">
                <li><button onClick={() => starValue(0)} className="dropdown-item">0 start</button></li>
                <li><button onClick={() => starValue(.5)} className="dropdown-item">.5 start</button></li>
                <li><button onClick={() => starValue(1)} className="dropdown-item">1 start</button></li>
                <li><button onClick={() => starValue(1.5)} className="dropdown-item">1.5 start</button></li>
                <li><button onClick={() => starValue(2)} className="dropdown-item">2 start</button></li>
                <li><button onClick={() => starValue(2.5)} className="dropdown-item">2.5 start</button></li>
                <li><button onClick={() => starValue(3)} className="dropdown-item">3 start</button></li>
                <li><button onClick={() => starValue(3.5)} className="dropdown-item">3.5 start</button></li>
                <li><button onClick={() => starValue(4)} className="dropdown-item">4 start</button></li>
                <li><button onClick={() => starValue(4.5)} className="dropdown-item">4.5 start</button></li>
                <li><button onClick={() => starValue(5)} className="dropdown-item">5 start</button></li>
            </ul>
            <StarsReview rating={startInput} size={32} />

            {displayInput &&
                <form method="POST" action='#'>
                    <hr />
                    <div className="mb-3">
                        <label className="form-label">
                            Description
                        </label>
                        <textarea className="form-control" id='submitReviewDescription' placeholder="Optional"
                            rows={3} onChange={e => setReviewDescription(e.target.value)}>
                        </textarea>
                    </div>
                    <div>
                        <button type="button" onClick={() => props.submitReview(startInput, reviewDescription)} className="btn btn-primary mt-3">Submit Review</button>
                    </div>
                </form>
            }

        </div>
    );
}