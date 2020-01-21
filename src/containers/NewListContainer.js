import React from 'react'
import ListItem from '../components/ListItem'

class NewListContainer extends React.Component {


    render() {

        let listArray = this.props.movieList.map(movieObj => {
            return <ListItem movie={movieObj} />
        })

        return(
            <div>
                <h1>New List Container</h1>
                {listArray}
                <button onClick={(e) => this.props.handleListSave(e, listArray)}>Save this List</button>
            </div>
        )
    }
}

export default NewListContainer;