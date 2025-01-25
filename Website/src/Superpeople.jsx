import React from "react";
import SuperPerson from "./SuperPerson";

function SuperPeople() {
    const heroes = [
        { name: "Hulk", superpower: "vahva" },
        { name: "Storm", superpower: "Sään hallinta" },
        { name: "Ant-Man", superpower: "Koko vaihtelu" },
    ];

    return (
        <ul>
            {heroes.map((hero, index) => (
                <SuperPerson key={index} name={hero.name} superpower={hero.superpower} />
            ))}
        </ul>
    );
}

export default SuperPeople;
