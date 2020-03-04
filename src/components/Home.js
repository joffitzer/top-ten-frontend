import React from 'react'
import ListCard from './ListCard'
import ListShow from './ListShow'
import { connect as cnx } from 'react-redux';
import { listLoader } from '../actionCreators'


class Home extends React.Component {

    state = {
        // allLists: [],
        listToShow: null,
        isListSelected: false,
    }

    componentDidMount() {
        fetch ('http://localhost:3000/api/v1/lists')
          .then(res => res.json())
          .then(lists => {
            this.props.listLoader(lists)
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
        let listArray = this.props.allLists.map(listObj => {
            return <ListCard key={listObj.id} list={listObj} deleteList={this.deleteList} handleViewListClick={this.handleViewListClick}/>
        } )
        return(
            <div>
                {this.state.isListSelected ? <ListShow selectedList={this.state.listToShow}/> : listArray}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allLists } = state;
  
    return {
      allLists
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      listLoader: (lists) => dispatch(listLoader(lists))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(Home);
