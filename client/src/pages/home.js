import React from "react";
import MortgageAPI from "../components/mortgageAPI"
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"




function Home() {


    return (
        <>

            <Jumbotron className="text-center">
                <h1>Welcome to Gringotts Wizarding Bank!</h1>
            </Jumbotron>
            <Container>
                        <MortgageAPI />

            </Container>




        </>
    )
}

export default Home