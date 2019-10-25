import React, { useEffect, useState } from 'react';
import HotelCard from './HotelCard';
import Loader from '../loader/Loader';
import './HotelList.scss'

import { connect } from 'react-redux';
import { fetchHotels } from '../../state/actions';


const HotelList = ({ fetchHotels, hotels }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllHotels()
    }, []);

    const fetchAllHotels = async () => {
        try {
            await fetchHotels()
        } catch (error) {
            setError(error.message)
        }

        setLoading(false);
    }
    
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return error;
    }

    const hotelsToShow = hotels
        .map(element => <HotelCard key={element.id} hotel={element} toggleButton />);

    return (
        <div className="hotel-list">
            { hotelsToShow }
        </div>
    );
}

const mapStateToProps = state => {
    return { hotels: state.hotels };
}

export default connect(
    mapStateToProps,
    { fetchHotels }
)(HotelList);