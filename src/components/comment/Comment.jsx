import React from 'react';
import './Comment.scss';

const Comment = (props) => {
    return (
        <div className="comment">
            <div className="comment__inner-wrapper">
                <h3 className="comment__author">
                    {props.author}
                </h3>
                <p className="comment__content">
                    {props.content}
            </p>
            </div>
        </div>
    );
}

export default Comment;