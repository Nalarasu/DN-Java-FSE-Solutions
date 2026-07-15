import React, { Component } from "react";

class Getuser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: null,
            loading: true
        };
    }

    async componentDidMount() {

        const response =
            await fetch("https://api.randomuser.me/");

        const data =
            await response.json();

        this.setState({
            person: data.results[0],
            loading: false
        });
    }

    render() {

        if (this.state.loading) {
            return <h2 > Loading... < /h2>;
        }

        const person = this.state.person;

        return (

            <
            div style = {
                {
                    textAlign: "center",
                    marginTop: "50px"
                }
            } >

            <
            h1 > User Details < /h1>

            <
            img src = { person.picture.large }
            alt = "User" /
            >

            <
            h2 > { person.name.title } <
            /h2>

            <
            h2 > { person.name.first } <
            /h2>

            <
            /div>

        );
    }
}

export default Getuser;