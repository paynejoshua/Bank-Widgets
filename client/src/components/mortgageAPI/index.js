import React, { useState, useEffect, useCallback } from "react"
import Card from "react-bootstrap/Card";
import API from "../../utils/API/apiRoutes";
import MortgageDataCard from "../mortgageDataCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"


function Mortgage() {



    const [rate, setRate] = useState();
    const [downPayment, setDownPayment] = useState();
    const [monthlyInterest, setMonthlyInterest] = useState();
    const [monthlyPayment, setMonthlyPayment] = useState();
    const [fixedRate, setFixedRate] = useState();
    const [homeValue, setHomeValue] = useState();
    const [btn15, setBtn15] = useState("primary");
    const [btn30, setBtn30] = useState("secondary");

    const [mortgageData, setMortgageData] = useState();



    const getRate = useCallback(() => {
        API.getRate()
            .then(res => {
                console.log("api call:", res.data)
                setRate(res.data)
                setMonthlyInterest(res.data / 100 / 12)
            }, 2000)

    }, [])

    useEffect(() => {
        getRate()
    }, [getRate])


    function calculateDownPayment(number) {
        // factor down payment of 20%
        let downPayment = number * .20
        setDownPayment(downPayment)
        // setDownPayment(downPayment.toLocaleString())
        setHomeValue(number)
        setMonthlyPayment("")
    }

    const getPrice = () => {
        const data = {
            homePrice: homeValue,
            downPayment: downPayment,
            interestRate: monthlyInterest,
            fixedRate: fixedRate
        }
        API.getPrice(data)
            .then(res => {
                console.log(res.data)
                setMortgageData(res.data)
            })

    }

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }


    function setRate15(number) {
        setFixedRate(number)
        setBtn15("primary")
        setBtn30("secondary")
    }

    function setRate30(number) {
        setFixedRate(number)
        setBtn15("secondary")
        setBtn30("primary")
    }

    return (
        <>
        <Row className="d-flex justify-content-between">
            <Col>
            
            <Card style={{ width: "18rem" }}>

                <Card.Body>
                    <Card.Title>
                        How much is the home you are looking to purchase?
                        <input type="number" onChange={(e) => calculateDownPayment(e.target.value)}></input>



                    </Card.Title>
                    <Card.Title>
                        Down Payment Percentage:
                        <input type="number" maxLength="2" onInput={maxLengthCheck} onChange={(e) => setDownPayment(e.target.value)}></input>

                    </Card.Title>
                    <Card.Title>
                        Fixed Rate Length:
<br></br>
                        <Button variant={btn15} style={{margin: "1rem"}} onClick={() => setRate15(15)}>15</Button>

                        <Button variant={btn30} style={{margin: "1rem"}} onClick={() => setRate30(30)}>30</Button>

                    </Card.Title>
                    <Card.Title>
                        Monthly Payment: {monthlyPayment}

                    </Card.Title>

                    <button onClick={getPrice}>See Results</button>

                    <p>Current Mortgage Rate: {rate}%</p>

                    </Card.Body>
            </Card>
            </Col>
            <Col>
                    {
                        mortgageData &&
                        <>
                        <MortgageDataCard data={mortgageData} />
                        </>

                    }
            
            </Col>

        </Row>

                

        </>
    )
}

export default Mortgage