import React from 'react';

class ListCard extends React.Component {


    render() {
        
        return(
            <div className="form-padding">
                <h5>{this.props.list.listName}</h5>
                <button onClick={(e) => this.props.deleteList(e, this.props.list)}>Delete List</button>
                <button onClick={() => this.props.handleViewListClick(this.props.list)}>View List</button>
                <hr></hr>
            </div>
        )
    }

}

export default ListCard;