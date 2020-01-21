import React from 'react';

class ListItemShow extends React.Component {
    render() {
        return(
            <div>
                <h5>Title: {this.props.movie.title}</h5>
                <h5>Year: {this.props.movie.year}</h5>
                <img src={this.props.movie.imageUrl} alt={this.props.movie.title} />
            </div>
        )
    }

}

export default ListItemShow;