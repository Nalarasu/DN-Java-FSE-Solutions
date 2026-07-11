import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import Home from "./Home";
import TrainerList from "./TrainerList";
import TrainerDetails from "./TrainerDetails";

function App() {

    return ( <
        BrowserRouter >

        <
        h1 > My Academy Trainers App < /h1>

        <
        Link to = "/" > Home < /Link> { " | " } <
        Link to = "/trainers" > Show Trainers < /Link>

        <
        hr / >

        <
        Routes >

        <
        Route path = "/"
        element = { < Home / > }
        />

        <
        Route path = "/trainers"
        element = { < TrainerList / > }
        />

        <
        Route path = "/trainer/:id"
        element = { < TrainerDetails / > }
        />

        <
        Route path = "*"
        element = { < Navigate to = "/" / > }
        />

        <
        /Routes>

        <
        /BrowserRouter>
    );
}

export default App;