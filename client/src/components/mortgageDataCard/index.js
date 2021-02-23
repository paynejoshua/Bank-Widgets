import React from "react";
import Card from "react-bootstrap/Card"

function MortgageDataCard(props) {
    console.log("here", props)
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Principle and Interest: ${props.data.principalAndInterest}
                    </Card.Title>
                    <Card.Title>
                        Taxes: ${props.data.taxes}
                    </Card.Title>
                    <Card.Title>
                        Home Insurance: ${props.data.homeInsurance}
                    </Card.Title>
                    <Card.Title>
                        Mortgage Insurance: ${props.data.mortgageInsurance}
                    </Card.Title>
                </Card.Body>
            </Card>

        </>
    )
}

export default MortgageDataCard