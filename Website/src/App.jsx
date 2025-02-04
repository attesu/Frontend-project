import React from "react";
import SuperPeople from "./SuperPeople";
import useDataStore from "./stores/useDataStore";


function App() {
    const { heroes, addHero } = useDataStore(); // Hakee Zustandista heroes ja addHero-funktion

    return (
        <div>
            <h1>Supersankarit</h1>
            <SuperPeople heroes={heroes} addHero={addHero} />
        </div>
    );
}

export default App;
