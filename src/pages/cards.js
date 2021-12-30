import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { movieListAction } from '../actions/movieListAction';
import { Link } from 'react-router-dom'

function Cards() {
    const dispatch = useDispatch();

    const movieReducer = useSelector(state => state.movieReducer);
    const { movies } = movieReducer;

    useEffect(() => {
        dispatch(movieListAction())
    }, [dispatch])
    console.log(movies)
    return (
        <div>
            <div className='container-fluid'>

                {/* first row */}
                <div className='first-row'>

                    <h3>TV Shows</h3>
                    <div className="row">
                        {
                            movies.map((item) => (

                                item.category === "tvShow" ?
                                    <div className="card" key={item._id}>
                                        <Link to={`/detail/${item._id}`}><img src={item.image} alt="" /></Link>

                                    </div>
                                    : null


                            ))
                        }


                    </div>

                </div>

                {/* second row */}
                <div className='first-row'>
                    <h3>Hindi Movies</h3>
                    <div className="row">
                        {
                            movies.map((item) => (
                                item.category === "hindiMovie" ?
                                    <div className="card" key={item._id}>
                                        <Link to={`/detail/${item._id}`}><img src={item.image} alt="" /></Link>

                                    </div>
                                    : null
                            ))
                        }


                    </div>

                </div>

                {/* third row */}
                <div className='first-row'>
                    <h3>English Movies</h3>
                    <div className="row">
                        {
                            movies.map((item) => (
                                item.category === "englishMovie" ?
                                    <div className="card" key={item._id}>
                                        <Link to={`/detail/${item._id}`}><img src={item.image} alt="" /></Link>

                                    </div>
                                    : null
                            ))
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards
