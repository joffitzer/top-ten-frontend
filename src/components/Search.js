import React from 'react';

class Search extends React.Component {

    state = {
        searchTerm: "",
        isLoaded: false, 
        movies: []
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value 
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        fetch (`http://www.omdbapi.com/?apikey=d47e0231&s=${this.state.searchTerm}`)
            .then(res => res.json())
            .then(movieObj => {
                this.setState({
                    movies: movieObj,
                    isLoaded: true
                })
            }
        )
    }



    

    render () {
        let movieSearchResults = this.state.movies.Search

        let movieSearchResultsArray

        if (this.state.isLoaded) {
            movieSearchResultsArray = movieSearchResults.map(movieObj => {
                return (
                    <div>
                        <h5>{movieObj.Title}</h5>
                        <img src={movieObj.Poster} alt={movieObj.Title} width="42"/>
                        <button onClick={() => this.props.handleAddToList(movieObj)}>Add to List</button>
                    </div>
                )
            })
        }

        return(
            <div>
                <form onSubmit={this.handleSearch}>
                    <label>
                        Movie Title:
                        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {movieSearchResultsArray}
            </div>

        )
    }
}

export default Search
