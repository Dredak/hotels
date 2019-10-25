import api from "../../services/api"
import { SET_HOTEL_COMMENTS, SET_HOTELS, CREATE_COMMENT } from "./types";

export const fetchHotels = () => async dispatch => {
    const response = await api.get('/hotels/');

    dispatch({type: SET_HOTELS, payload: response.data});
}

export const fetchComments = (id) => async dispatch => {
    const response = await api.get(`/hotels/comments/${id}`);

    dispatch({type: SET_HOTEL_COMMENTS, payload: response.data})
}

export const createComment = (id, body) => async dispatch => {
    const response = await api.post(`/hotels/comment/${id}`, body);

    dispatch({type: CREATE_COMMENT, payload: response.data})
}