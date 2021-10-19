import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'


const MovieList = (props) => {

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`;
    }

  
        
      

    return (
        <div className="row">
            {props.movies.map((movie, i) => (
                <div className=" col-lg-3">
                    <div className="example-2 card shadow-sm">
                        <div className="wrapper w-100" style={{ backgroundImage: `url(${movie.imageURL})` }}>
                            <div className="header d-flex justify-content-end py-0 px-2">
                                <h2><span className="badge bg-warning">Imdb: {movie.rating}</span></h2>
                            </div>
                            <div className="data">
                                <div className="content">
                                    <h1 className="title"><a href="#">{movie.name}</a></h1>
                                    <p className="text mb-3">{truncateOverview(movie.overview, 120)}</p>

                                </div>
                                <div className="d-flex justify-content-between align-items-center px-3 pb-2 pt-4">
                                    <button className="btn btn-danger" type="button" onClick={(event) => props.deleteMovieProp(movie)}>Delete</button>

                                    <Link type="button"
                                        className="btn btn-outline-info"
                                        to={`edit/${movie.id}`}
                                    >Edit </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    )
}

export default MovieList