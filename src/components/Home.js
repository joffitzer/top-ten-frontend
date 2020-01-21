import React from 'react'
import ListCard from './ListCard'
import ListShow from './ListShow'


class Home extends React.Component {
    state = {
        allLists: [],
        listToShow: null,
        isListSelected: false,
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/lists')
          .then(res => res.json())
          .then(lists => {
            this.setState({
              allLists: lists
            })
          })
      }

    handleViewListClick = (list) => {
        this.setState({
            listToShow: list,
            isListSelected: true
        })
    }

    deleteList = (e, list) => {
        e.preventDefault();
        fetch (`http://localhost:3000/api/v1/lists/${list.id}`, {
            method: 'DELETE'
        }).then(this.setState({
            allLists: this.state.allLists.filter(listObj => listObj.id !== list.id)
        }))
    }
  
    render() {
        let listArray = this.state.allLists.map(listObj => {
            return <ListCard key={listObj.id} list={listObj} deleteList={this.deleteList} handleViewListClick={this.handleViewListClick}/>
        } )
        return(
            <div>
                {this.state.isListSelected ? <ListShow selectedList={this.state.listToShow}/> : listArray}
            </div>
        )
    }
}

export default Home;