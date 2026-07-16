import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ename: "",
            complaint: "",
            NumberHolder: Math.floor(Math.random() * 100) + 1
        };
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });

    };

    handleSubmit = (event) => {

        const msg =
            "Thanks " +
            this.state.ename +
            "\nYour Complaint was Submitted.\nTransaction ID is: " +
            this.state.NumberHolder;

        alert(msg);

        event.preventDefault();
    };

    render() {

        return (

            <
            div style = {
                { textAlign: "center", marginTop: "80px" } } >

            <
            h1 style = {
                { color: "red" } } >
            Register your complaints here!!!
            <
            /h1>

            <
            form onSubmit = { this.handleSubmit } >

            <
            table align = "center"
            cellPadding = "10" >

            <
            tbody >

            <
            tr >
            <
            td > Name: < /td>

            <
            td >
            <
            input type = "text"
            name = "ename"
            value = { this.state.ename }
            onChange = { this.handleChange }
            /> <
            /td> <
            /tr>

            <
            tr >
            <
            td > Complaint: < /td>

            <
            td >
            <
            textarea name = "complaint"
            value = { this.state.complaint }
            onChange = { this.handleChange }
            /> <
            /td> <
            /tr>

            <
            tr >
            <
            td > < /td>

            <
            td >
            <
            button type = "submit" >
            Submit <
            /button> <
            /td> <
            /tr>

            <
            /tbody>

            <
            /table>

            <
            /form>

            <
            /div>

        );
    }
}

export default ComplaintRegister;