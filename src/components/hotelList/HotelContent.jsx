import React from 'react';
import Stars from '../Stars';

const HotelContent = (props) => {

    const { city, country, date_created, description, name, price, stars, id } = props.hotel;
    const date = new Date(date_created);

    return (
        <div className="hotel-card__content">
            <div className="hotel-card__title-wrapper">
                <h2 className="hotel-card__content__title">
                    {name}
                </h2>
                <Stars stars={stars} id={id} />
            </div>
            <address className="hotel-card__content__address">
                {country}, {city}
            </address>
            <p className="hotel-card__content__description">
                {description}
            </p>
            <div className="hotel-card__footer">
                {props.toggleButton && <p className="hotel-card__footer__btn btn" onClick={props.toggleComments}>{props.buttonText}</p>}
                <p className="hotel-card__footer__price">{price}$</p>
                <p className="hotel-card__footer__date">{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</p>
            </div>
        </div>
    )
}

export default HotelContent;