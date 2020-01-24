import React from 'react';
import NewListContainer from '../containers/NewListContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class NewList extends React.Component {
    state = {
        movies: [],
        searchTerm: '',
        isLoaded: false,
        movieList: [],
        listName: '',
        list: null
    }


    handleSearch = (e) => {
        e.preventDefault();
        if (this.state.searchTerm.length > 2) {
            fetch (`http://www.omdbapi.com/?apikey=d47e0231&s=${this.state.searchTerm}`)
                .then(res => res.json())
                .then(movieObj => {
                    this.setState({
                        movies: movieObj,
                        isLoaded: true
                    })
                }
            )

        } else {
            alert("Searches must be more than 2 characters long")
        }
    }

    handleNameSave = (e) => {
        e.preventDefault();
        fetch ("http://localhost:3000/api/v1/lists", {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({listName: this.state.listName, profileId: 1})
          })
          .then(response => response.json())
          .then(resp => 
            this.setState({
              list: resp,
              listName: ''
          }))
    }

    handleListSave = (e, listItemArray) => {
        e.preventDefault();
        console.log(listItemArray)
        listItemArray.map ( (listItem, index) => 
            fetch ("http://localhost:3000/api/v1/items", {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({
                    listId: this.state.list.id,
                    Title: listItem.props.movie.Title, 
                    Poster: listItem.props.movie.Poster, 
                    Year: listItem.props.movie.Year,
                    Rank: index + 1
                })
              })
              .then(response => response.json())
              .then()
        )
    }

    // .then( this.props.history.push(`/profiles/1/lists/${this.state.list.id}`)

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value 
        })
    }

    handleNameChange = (e) => {
        this.setState({
            listName: e.target.value 
        })
    }

    handleAddToList = (movieObj) => {
        this.setState({
            movieList: [...this.state.movieList, movieObj],
            searchTerm: "",
            movies: [],
            isLoaded: false
        })
    }

    render() {

        let movieSearchResults = this.state.movies.Search

        let movieSearchResultsArray

        if (this.state.isLoaded) { 
            if (!!movieSearchResults){
                movieSearchResultsArray = movieSearchResults.map(movieObj => {
                    return (
                        <div>
                            <h5>{movieObj.Title}</h5>
                            <img src={movieObj.Poster} alt={movieObj.Title} width="42"/>
                            <button onClick={() => this.handleAddToList(movieObj)}>Add to List</button>
                        </div>
                    )
                })
            } else {
                alert("No results found, please try again!")
                this.setState({
                    isLoaded: false
                }) 
            }
        }

        return(
            <Container>
                <Row>
                    <Col>
                        {this.state.list 
                        ?   <form onSubmit={this.handleSearch}>
                                <label>
                                Movie Title:
                                <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        :   
                            <form onSubmit={this.handleNameSave}>
                                <label>
                                List Name:
                                <input type="text" value={this.state.listName} onChange={this.handleNameChange} />
                                </label>
                                <input type="submit" value="Submit" />
                            </form> 
                        }
                        {movieSearchResultsArray}
                    </Col>
                    <Col>
                        <div>
                            <h1>{this.state.list ? this.state.list.listName : "Your New List" }</h1>
                            <NewListContainer movieList={this.state.movieList} handleListSave={this.handleListSave}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewList;