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

    render() {

        console.log(this.state.allItems)

        let listShowArray = this.state.allItems.map(itemObj => {
            return <ListItemShow key={itemObj.id} movie={itemObj}/>
        })

        return(
            <div>
                {listShowArray}
            </div>
        )
    }

}

export default ListShow;