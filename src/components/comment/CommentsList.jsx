import React, { useEffect } from 'react';
import Comment from './Comment';
import Loader from '../loader/Loader';
import CommentForm from '../commentForm/CommentForm';
import { fetchComments } from '../../state/actions';
import { connect } from 'react-redux';

const CommentsList = ({ comments, hotelId, fetchComments }) => {

    useEffect(() => {
        fetchComments(hotelId);
    }, [])

    const renderComments = () => {
        return comments.map((comment, index) => {
            return <Comment key={index} author={comment.fullName} content={comment.comment} />
        })
    }

    if (!comments.length) {
        return <Loader />;
    }

    return (
        <React.Fragment>
           <CommentForm id={hotelId}/>
           { renderComments()}
        </React.Fragment>
    );
}



const mapStateToProps = (state, ownProps) => {
    const hotelComments = state.comments.filter(comment => {
        return comment.hotel_id === ownProps.hotelId
    })

    return {
        comments: hotelComments
    }
}

export default connect(mapStateToProps, { fetchComments })(CommentsList);