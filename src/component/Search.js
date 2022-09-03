import { useState } from "react";

function Search() {
    const [playerName, setPlayerName] = useState(null);
    return (
        <>
            <form onSubmit={event => {
                event.preventDefault();
                setPlayerName(event.target.playerName.value)
            }}>
                <input type="text" name="playerName" placeholder="player name"/>
                <input type="submit" value="search"/>
            </form>
            <p>{playerName}</p>
        </>
    )
}

export default Search;