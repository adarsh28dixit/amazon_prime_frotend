import { MOVIE_DETAIL_FAIL, MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS } from "../constants/movieListConstant"
import axios from '../axios'

export const movieListAction = () => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_LIST_REQUEST })
        const { data } = await axios.get('/api/movie');
        dispatch({ type: MOVIE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: MOVIE_LIST_FAIL, payload: error.message })
    }
}

export const movieDetailAction = (movieId) => async (dispatch) => {
    dispatch({ type: MOVIE_DETAIL_REQUEST, payload: movieId })
    try {
        
        const { data } = await axios.get(`/api/movie/${movieId}`);
        dispatch({ type: MOVIE_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: MOVIE_DETAIL_FAIL, payload: error.message })
    }
}