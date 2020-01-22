import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'




class ListItem extends React.Component {
    render() {
        return(
            <Card>
                <Container>
                    <Row>
                        <Col xs lg="2">
                            <Image src={this.props.movie.Poster} alt={this.props.movie.Title} thumbnail/>
                        </Col>
                        <Col>
                            <h5>Title: {this.props.movie.Title}</h5>
                            <h5>Year: {this.props.movie.Year}</h5>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }

}

export default ListItem;