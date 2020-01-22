import React from 'react'
import ListItem from '../components/ListItem'

class NewListContainer extends React.Component {


    render() {

        let listArray = this.props.movieList.map((movieObj, index) => {
            return <ListItem movie={movieObj} rank={index} />
        })

        return(
            <div>
                {listArray}
                <button onClick={(e) => this.props.handleListSave(e, listArray)}>Save this List</button>
            </div>
        )
    }
}

export default NewListContainer;