import React from 'react';
import ListItemShow from './ListItemShow'
import Search from './Search'

class ListShow extends React.Component {

    state ={
        inOriginalList: false,
        movieList: [],
        showEdit: false,
        listId: null
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/items')
          .then(res => res.json())
          .then(items => { 
            let filteredItems = items.filter( item => item.listId === this.props.selectedList.id )
            this.setState({
                movieList: filteredItems,
                listId: this.props.selectedList.id
            })
          })
    }    

    handleEditList = () => {
        this.setState({
            showEdit: true
        })
    }

    handleAddToList = (movieObj) => {
        this.setState({
            movieList: [...this.state.movieList, movieObj]
        })
    }

    handleListSave = (e, listItemArray) => {
        console.log("listItemArray", listItemArray)
        e.preventDefault();
        listItemArray.map ( (listItem, index) => 
             { if (!listItem.id) {
                fetch ("http://localhost:3000/api/v1/items", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                    body: JSON.stringify({
                        listId: this.state.listId,
                        Title: listItem.Title, 
                        Poster: listItem.Poster, 
                        Year: listItem.Year,
                        Rank: index + 1
                    })
                  })
                  .then(response => response.json())
                  .then(res => console.log(res))
            }}
        )
    }

    // let filteredItems = items.filter( item => item.listId === this.props.selectedList.id )

    render() {

        let sortedListShowArray = this.state.movieList.sort(function (a, b) {
            if (a.Rank < b.Rank) return -1;
            else if (a.Rank > b.Rank) return 1;
            return 0;
          });

        let listShowArray = sortedListShowArray.map(itemObj => {
            return <ListItemShow key={itemObj.id} 
            movie={itemObj}
            />
        })

        return(
            <div>
                <button onClick={this.handleEditList}>Edit List</button>
                {this.state.showEdit ? <Search handleAddToList={this.handleAddToList}/> : ""}
                {listShowArray}
                {this.state.showEdit 
                    ? <button onClick={(e) => this.handleListSave(e, this.state.movieList)}>Save this List</button>
                    : ""}

            </div>
        )
    }

}

export default ListShow;