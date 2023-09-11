import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </header>
        </div>
    );
}

export default App;
