import React from 'react';

class ListItem extends React.Component {
    render() {
        return(
            <div>
                <h5>Title: {this.props.movie.Title}</h5>
                <h5>Year: {this.props.movie.Year}</h5>
                <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
            </div>
        )
    }

}

export default ListItem;