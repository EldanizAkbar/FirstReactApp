import React from 'react';
import axios from 'axios';

class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }
    async componentDidMount() {

        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        const movie = response.data;
        this.setState({
            name: movie.name,
            rating: movie.rating,
            overview: movie.overview,
            imageURL: movie.imageURL
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, rating, overview, imageURL } = this.state;
        const id = this.props.match.params.id;
        const updatedMovie = {
            name,
            rating,
            overview,
            imageURL
        }
        this.props.onEditMovie(id, updatedMovie);
        this.props.history.push('/');
    }


    render() {
        return (
            <div className="container">
                <form className="mt-5 col-8 m-auto" onSubmit={this.handleFormSubmit}>
                    <div className="col-md-10 m-auto">            <input className="form-control p-2 px-4" id="disabledInput" type="text" placeholder="EDIT The Form To UPDATE A Movie.." disabled />
                    </div>
                    <div className="row mt-2 justify-content-center">
                        <div className="col-md-8">

                            <input type="text"
                                className="form-control p-3 px-4 mt-3"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onInputChange} />
                        </div>
                        <div className="col-md-2">

                            <input
                                type="text"
                                className="form-control p-3 px-4 mt-3"
                                placeholder="Rating"
                                name="rating"
                                value={this.state.rating}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="row  mt-2">
                        <div className="col-md-10 m-auto">

                            <input
                                type="text"
                                placeholder="Image URL"
                                className="form-control p-3 px-4 mt-3"
                                name="imageURL"
                                value={this.state.imageURL}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-10 m-auto">

                            <textarea
                                className="form-control p-3 px-4 mt-3"
                                placeholder="Overview"
                                name="overview" rows="5"
                                value={this.state.overview}
                                onChange={this.onInputChange}></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 m-auto">

                            <input type="submit"
                                class="btn btn-outline-info rounded-pill mt-4 px-3 py-2"
                                data-mdb-ripple-color="dark" value="Edit Movie" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }}
export default EditMovie;