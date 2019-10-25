import React from 'react';

const Stars = (props) => {

    const renderStars = () => {
        const numberOfStars = Number.parseInt(props.stars);
        let stars = [];

        for(let i = 0; i < numberOfStars; i++) {
            stars.push(<span className="fa fa-star" key={props.id+i}></span>);
        }
        
        return stars;
    }

    return (
        <div>
            {renderStars()}
        </div>
    );
}

export default Stars;