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
                <div className="col-lg-3" key={i}>
                    <div className="card mb-4 ">
                        <img src={movie.imageURL} className="card-img-top" alt="Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverview(movie.overview, 120)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-md btn-outline-danger" type="button" onClick={(event) => props.deleteMovieProp(movie)}>Delete</button>

                                <Link type="button"
                                    className="btn btn-md btn-outline-primary"
                                    to={`edit/${movie.id}`}
                                >Edit </Link>


                                <h2><span className="badge bg-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                

            ))}

        </div>
        
    )

}

export default MovieList