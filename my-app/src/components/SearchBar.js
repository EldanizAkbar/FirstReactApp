import React from 'react';
import { Link } from 'react-router-dom';
class SearchBar extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form row mb-5 mt-5 d-flex align-items-center justify-content-around">
                    <div className="col-8">
                        <input
                            onChange={this.props.searchMovieProp}
                            type="text" className="form-control p-3"
                            placeholder="Seach a movie"
                        />
                    </div>
                    <div className="col-2">
                        <Link to="/add" type="button"
                            class="btn btn-outline-success rounded-pill px-3 py-2"
                            data-mdb-ripple-color="dark"
                        >Add Movie
                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar