import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailAction } from '../actions/movieListAction';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const dispatch = useDispatch()
    const params = useParams();
    const { id: movieId } = params;

    const detailReducer = useSelector(state => state.detailReducer);
    const { movieDetail } = detailReducer;



    useEffect(() => {
        dispatch(movieDetailAction(movieId))
    }, [movieId, dispatch])


    console.log(movieDetail);

    return (
        <div>

            <div className="sidenav">
                <a href="#about"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#services"><i className="fa fa-fw fa-wrench"></i>Services</a>
                <a href="#clients"><i className="fa fa-fw fa-user"></i>Clients</a>
                <a href="#contact"><i className="fa fa-fw fa-envelope"></i>Contact</a>
            </div>
            <div className="main">



                <img className="detail-image" src="images/hotstar.jpg" width="100%" height="400px" alt="" />

                <div className='detail-mid'>
                    <h2>{movieDetail.name}</h2>
                    <p><h6>Season {movieDetail.season} IMDb 8.1 2020</h6></p>

                    <p>
                        {movieDetail.description}
                    </p>
                    <div className='sub'>
                        <div className='col-4'>
                            <h6>Starring</h6>
                            <h6>Subtitles</h6>
                            <h6>Audio languages</h6>
                        </div>
                        <div className='col-8'>
                            <h6>Robble Amell, Andy Allo</h6>
                            <h6>{movieDetail.subtitles}</h6>
                            <h6>{movieDetail.languages}</h6>
                        </div>
                    </div>


                </div>


            </div>
            <div className='episode'>
                <h4>Episode(10)</h4>

                <div className="card-nav" >
                    <div className='img' style={{ width: "12rem" }}>
                        <img className="card-img-top" src="images/hindi.jpg" alt=" " />
                    </div>
                    <div className="card-body-episode">
                        <h5 className="card-title">1. Welcome to Upload</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div className="card-nav" >
                    <div className='img' style={{ width: "12rem" }}>
                        <img className="card-img-top" src="images/hindi.jpg" alt=" " />
                    </div>
                    <div className="card-body-episode">
                        <h5 className="card-title">2. Welcome to Upload</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>


            </div>

        </div >







    )
}

export default MovieDetail
