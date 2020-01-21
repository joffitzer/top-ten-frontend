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

  
    render() {
        console.log(this.state.listToShow)
        let listArray = this.state.allLists.map(listObj => {
            return <ListCard key={listObj.id} list={listObj} handleViewListClick={this.handleViewListClick}/>
        } )
        return(
            <div>
                {this.state.isListSelected ? <ListShow selectedList={this.state.listToShow}/> : listArray}
            </div>
        )
    }
}

export default Home;