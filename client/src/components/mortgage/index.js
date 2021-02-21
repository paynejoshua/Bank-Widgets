import React, { useState, useEffect, useCallback } from "react"
import Card from "react-bootstrap/Card";
import API from "../../utils/API/apiRoutes";


function Mortgage() {

    const [rate, setRate] = useState();
    const [downPayment, setDownPayment] = useState();
    const [monthlyInterest, setMonthlyInterest] = useState();
    const [monthlyPayment, setMonthlyPayment] = useState();
    const [fixedRate, setFixedRate] = useState();
    const [homeValue, setHomeValue] = useState();


    const getRate = useCallback(() => {
        API.getRate()
            .then(res => {
                console.log("api call:", res.data)
                setRate(res.data)
                setMonthlyInterest(res.data / 12)
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

    const calcMonthlyPayment = (number) => {

        let totalFixedRate = fixedRate * 12

        let payment = (homeValue - downPayment) / totalFixedRate + monthlyInterest

        setMonthlyPayment(payment.toFixed(2))

    }

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    useEffect(() => {
        calcMonthlyPayment()
    }, [fixedRate])

    console.log("1", downPayment)

    return (
        <>
            <Card style={{ width: "18rem" }}>

                <Card.Body>
                    <Card.Title>
                        How much is the home you are looking to purchase?
                        <input type="number" onChange={(e) => calculateDownPayment(e.target.value)}></input>



                    </Card.Title>
                    <Card.Title>
                        Down Payment:
                        <input type="number" maxLength="2" onInput={maxLengthCheck} onChange={(e) => setDownPayment(e.target.value)}></input>

                    </Card.Title>
                    <Card.Title>
                        Fixed Rate Length:
<br></br>
                        <button onClick={() => setFixedRate(15)}>15</button>

                        <button onClick={() => setFixedRate(30)}>30</button>

                    </Card.Title>
                    <Card.Title>
                        Monthly Payment: {monthlyPayment}

                    </Card.Title>
                    <p>Current Mortgage Rate: {rate}</p>
                </Card.Body>
            </Card>

        </>
    )
}

export default Mortgage