import React from "react";
import SuperPerson from "./SuperPerson";
import HeroForm from "./HeroForm";
import useDataStore from "./stores/useDataStore";


function SuperPeople() {
    const { heroes, addHero } = useDataStore(); // Haetaan Zustandin tila

    return (
        <div>
            <ul>
                {heroes.map((hero, index) => (
                    <SuperPerson key={index} name={hero.name} superpower={hero.superpower} />
                ))}
            </ul>
            <HeroForm addHero={addHero} />
        </div>
    );
}

export default SuperPeople;
