import React from 'react';
import ListItemShow from './ListItemShow'

class ListShow extends React.Component {

    state ={
        allItems: []
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/items')
          .then(res => res.json())
          .then(items => { 
            let filteredItems = items.filter( item => item.listId === this.props.selectedList.id )
            this.setState({
                allItems: filteredItems
            })
          })
    }    

    handleEditList = () => {
        console.log(this.state.allItems)
    }

    // let filteredItems = items.filter( item => item.listId === this.props.selectedList.id )

    render() {

        console.log(this.props)

        let listShowArray = this.state.allItems.map(itemObj => {
            return <ListItemShow key={itemObj.id} movie={itemObj}/>
        })

        return(
            <div>
                <button onClick={this.handleEditList}>Edit List</button>
                {listShowArray}
            </div>
        )
    }

}

export default ListShow;