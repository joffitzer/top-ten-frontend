import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class ListItemShow extends React.Component {
    render() {
        console.log(this.props)
        return(
            <Card style={{ width: '36rem' }}>
                <Card.Body>
                    <Row>
                        <Col xs lg="1">                
                            <h1>{this.props.movie.Rank}</h1>
                        </Col>
                        <Col lg="2">
                            <Image src={this.props.movie.Poster} alt={this.props.movie.Title} width="75" thumbnail/>
                        </Col>
                        <Col>
                            <h2> {this.props.movie.Title}</h2>
                            <h5> {this.props.movie.Year}</h5>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }

}


            //             <Image src={this.props.movie.Poster} alt={this.props.movie.Title} thumbnail/>
            //         </Col>
            //         <Col>
            //             <h5>Title: {this.props.movie.Title}</h5>
            //             <h5>Year: {this.props.movie.Year}</h5>
            //         </Col>
            //     </Row>
            // </Container>

export default ListItemShow;