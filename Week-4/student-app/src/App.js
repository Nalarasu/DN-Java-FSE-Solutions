import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
    return ( <
        div style = {
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center"
            }
        } >
        <
        Home / >
        <
        About / >
        <
        Contact / >
        <
        /div>
    );
}

export default App;