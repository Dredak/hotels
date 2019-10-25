import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const HotelImage = ({ hotelId }) => {
    const [images, setImages] = useState([]);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        fetchHotelImages();
    }, [])

    const fetchHotelImages = async () => {
        try {
            const response = await api.get(`/hotels/images/${hotelId}`);
            setImages(response.data.images);
        } catch (e){
            // placeholders shown
            console.log(e.message)
        }
    }

    const incrementActiveImage = () => {
        setActiveImage(activeImage => {
            if (activeImage + 1 > images.length - 1) {
                return 0;
            }
            return activeImage + 1;
        })
    };

    const decrementActiveImage = () => {
        setActiveImage(activeImage => {
            if (activeImage - 1 < 0) {
                return images.length - 1;
            }
            return activeImage - 1;
        })
    };

    // show placeholder image
    if (!images.length) {
        return (
            <div className="hotel-card__slider">
                <div className="hotel-card__slider__left-arrow"></div>
                <img
                    className="hotel-card__slider__image"
                    src="./logo192.png"
                    alt="hotel"
                />
                <div className="hotel-card__slider__right-arrow"></div>
            </div>
        );
    }

    return (
        <div className="hotel-card__slider-wrapper">
            <div className="hotel-card__slider">
                <div className="hotel-card__slider__arrow hotel-card__slider__arrow--left" onClick={decrementActiveImage}></div>
                <img
                    className="hotel-card__slider__image"
                    src={images[activeImage]}
                    alt="hotel"

                />
                <div className="hotel-card__slider__arrow hotel-card__slider__arrow--right" onClick={incrementActiveImage}></div>
            </div>
        </div>
    );
}

export default HotelImage;