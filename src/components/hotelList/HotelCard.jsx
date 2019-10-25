import React, {useState} from 'react';
import HotelContent from './HotelContent';
import HotelImage from './HotelImage';
import CommentsList from '../comment/CommentsList';

const HotelCard = (props) => {

    const [commentVisible, setCommentVisible] = useState(false);

    const toggleComments = () => {
        setCommentVisible(commentVisible => !commentVisible)
    }

    let buttonText = commentVisible ? "Hide reviews" : "Show reviews";

    const {id} = props.hotel;

    return (
        <div className="hotel-card">
            <div className="hotel-card__wrapper">
                <HotelImage hotelId={id}/>
                <HotelContent toggleComments={toggleComments} buttonText={buttonText} hotel={props.hotel} toggleButton={props.toggleButton}/>
            </div>
            {commentVisible && <div>
                <CommentsList hotelId={id}/>
            </div>}
        </div>
    );
}

export default HotelCard;