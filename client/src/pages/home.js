import React from "react";
import Mortgage from "../components/mortgage";
import MortgageAPI from "../components/mortgageAPI"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"




function Home() {


    return (
        <>

            <Jumbotron className="text-center">
                <h1>Welcome to Gringotts Wizarding Bank!</h1>
            </Jumbotron>
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col>
                        <Mortgage />
                    </Col>
                    <Col>
                        <MortgageAPI />
                    </Col>
                </Row>

            </Container>




        </>
    )
}

export default Home