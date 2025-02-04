import React, { useState } from "react";

function HeroForm({ addHero }) {
    const [heroName, setHeroName] = useState("");
    const [superpower, setSuperpower] = useState("");

    const handleAddHero = () => {
        if (heroName.trim() && superpower.trim()) {
            addHero({ name: heroName, superpower });
            setHeroName("");
            setSuperpower("");
        }
    };

    return (
        <div>
            <input 
                onChange={(e) => setHeroName(e.target.value)}
                value={heroName}
                type="text"
                placeholder="Nimi"
            />
            <br />
            <input 
                onChange={(e) => setSuperpower(e.target.value)}
                value={superpower}
                type="text"
                placeholder="Supervoima"
            />
            <br />
            <button onClick={handleAddHero}>Tallenna</button>
        </div>
    );
}

export default HeroForm;
