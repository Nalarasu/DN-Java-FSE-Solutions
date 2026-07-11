import { ListOfPlayers, ScoreBelow70 } from "./ListOfPlayers";

function App() {

    const players = [
        { name: "Jack", score: 50 },
        { name: "Michael", score: 70 },
        { name: "John", score: 40 },
        { name: "Ann", score: 61 },
        { name: "Elisabeth", score: 61 },
        { name: "Sachin", score: 95 },
        { name: "Dhoni", score: 100 },
        { name: "Virat", score: 84 },
        { name: "Jadeja", score: 64 },
        { name: "Raina", score: 75 },
        { name: "Rohit", score: 80 }
    ];

    let flag = true;

    if (flag === true) {
        return ( <
            div >
            <
            h1 > List of Players < /h1>

            <
            ListOfPlayers players = { players }
            />

            <
            hr / >

            <
            h1 > List of Players having Scores Less than 70 < /h1>

            <
            ScoreBelow70 players = { players }
            /> <
            /div>
        );
    }

    return null;
}

export default App;