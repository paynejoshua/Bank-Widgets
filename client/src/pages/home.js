import React from "react";
import Mortgage from "../components/mortgage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron"




function Home() {
    

    return (
        <>
        <Jumbotron className="text-center">
            <h1>Welcome to Gringotts Wizarding Bank!</h1>
        </Jumbotron>
        <Row className="d-flex justify-content-between">
            <Col>
                <Mortgage />
            </Col>
            <Col>
                <Mortgage />
            </Col>
        </Row>
        
        
           
        </>
    )
}

export default Home