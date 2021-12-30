import { MOVIE_DETAIL_FAIL, MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS } from "../constants/movieListConstant";

export const movieListReducer = (state = {movies : []}, action) =>{
    switch(action.type){
        case MOVIE_LIST_REQUEST:
            return {loading: true, movies : []}
        case MOVIE_LIST_SUCCESS:
            return {loading: false, movies: action.payload}
        case MOVIE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const movieDetailReducer = (state = {movieDetail : []}, action) =>{
    switch(action.type){
        case MOVIE_DETAIL_REQUEST:
            return {loading: true, movieDetail: []}
        case MOVIE_DETAIL_SUCCESS:
            return {loading: false, movieDetail: action.payload}
        case MOVIE_DETAIL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}