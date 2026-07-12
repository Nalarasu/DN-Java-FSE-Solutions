import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor() {
        super();

        this.state = {
            amount: "",
            currency: ""
        };
    }

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        });
    };

    handleCurrency = (event) => {
        this.setState({
            currency: event.target.value
        });
    };

    handleSubmit = () => {

        let euroValue = this.state.amount * 80;

        alert(
            "Converting to Euro Amount is " +
            euroValue
        );
    };

    render() {

        return ( <
            div >

            <
            h1 style = {
                { color: "green" } } >
            Currency Convertor!!!
            <
            /h1>

            <
            label > Amount: < /label>

            <
            input type = "text"
            value = { this.state.amount }
            onChange = { this.handleAmount }
            />

            <
            br / >
            <
            br / >

            <
            label > Currency: < /label>

            <
            input type = "text"
            value = { this.state.currency }
            onChange = { this.handleCurrency }
            />

            <
            br / >
            <
            br / >

            <
            button onClick = { this.handleSubmit } >
            Submit <
            /button>

            <
            /div>
        );
    }
}

export default CurrencyConvertor;