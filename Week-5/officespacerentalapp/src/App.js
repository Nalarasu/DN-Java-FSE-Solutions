import officeImg from "./office.avif";

function App() {

    const officeSpaces = [{
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        },
        {
            Name: "Regus",
            Rent: 75000,
            Address: "Bangalore"
        },
        {
            Name: "WeWork",
            Rent: 65000,
            Address: "Hyderabad"
        }
    ];

    return ( <
        div style = {
            { marginLeft: "200px", marginTop: "50px" }
        } >

        <
        h1 > Office Space, at Affordable Range < /h1>

        <
        img src = { officeImg }
        alt = "Office Space"
        width = "300"
        height = "250" /
        >

        {
            officeSpaces.map((office, index) => (

                <
                div key = { index } >

                <
                h1 > Name: { office.Name } < /h1>

                <
                h3 style = {
                    {
                        color: office.Rent <= 60000 ?
                            "red" : "green"
                    }
                } >
                Rent: Rs. { office.Rent } <
                /h3>

                <
                h3 >
                Address: { office.Address } <
                /h3>

                <
                /div>

            ))
        }

        <
        /div>
    );
}

export default App;