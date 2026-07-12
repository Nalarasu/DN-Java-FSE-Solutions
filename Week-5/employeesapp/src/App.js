import ThemeContext from "./ThemeContext";
import EmployeeList from "./EmployeeList";
import "./App.css";

function App() {

    const theme = "light";

    return ( <
        ThemeContext.Provider value = { theme } >
        <
        EmployeeList / >
        <
        /ThemeContext.Provider>
    );
}

export default App;