import React from 'react';
import serialize from 'form-serialize';

class AddMovie extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        var newMovie = serialize(e.target, { hash: true });
        this.props.onAddMovie(newMovie);
    }

    render() {
        return (
            <div className="container">
                <form className="mt-5 col-8 m-auto" onSubmit={this.handleFormSubmit}>
                    <div className="col-md-10 m-auto">
                        <input className="form-control p-2 px-4" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    </div>
                    <div className="row mt-2 justify-content-center">
                        <div className="col-md-8">

                            <input type="text"
                                className="form-control p-3 px-4 mt-3"
                                placeholder="Name"
                                name="name" />
                        </div>
                        <div className="col-md-2">

                            <input
                                type="text"
                                className="form-control p-3 px-4 mt-3"
                                placeholder="Rating"
                                name="rating" />
                        </div>
                    </div>
                    <div className="row  mt-2">
                        <div className="col-md-10 m-auto">

                            <input
                                type="text"
                                placeholder="Image URL"
                                className="form-control p-3 px-4 mt-3"
                                name="imageURL" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-10 m-auto">

                            <textarea
                                className="form-control p-3 px-4 mt-3"
                                placeholder="Overview"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 m-auto">

                            <input type="submit"
                                class="btn btn-outline-success rounded-pill mt-4 px-3 py-2"
                                data-mdb-ripple-color="dark" value="Add Movie" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddMovie;