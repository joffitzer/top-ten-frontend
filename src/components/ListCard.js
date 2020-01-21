import React from 'react';

class ListCard extends React.Component {
    render() {
        return(
            <div onClick={() => this.props.handleViewListClick(this.props.list)} >
                <h5>List Name: {this.props.list.listName}</h5>
            </div>
        )
    }

}

export default ListCard;