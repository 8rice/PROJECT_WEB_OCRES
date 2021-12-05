import React, { useState, useEffect } from 'react'
import Prediction from '../Components/Prediction';
import Odds from '../Components/Odds';

export default function PredictionWidget() {
    const [data, setData] = useState([])
    const [gameID, setGameID] = useState(0)

    /*useEffect(() => {
        let mounted = true
        fetch("https://v3.football.api-sports.io/fixtures?next=5&league=39", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "021e9e258ba4d2039c51343eaeb44485"
            }
        })
            .then(response => response.json())
            .then((json) => {

                console.log(json.response)
                setData(json.response)
            })
        return function cleanup() {
            mounted = false
        }


    }, []);*/

    function handleClick(m) {
        console.log(m)
        setGameID(m);
        //change class pour match selectionné
    }

    if (!data) return <p>Loading</p>
    return (
        <div className="PredictionWidget">
            <div className="GameChoice">
                <h2><span className="HighlightedWord">Next</span> Games</h2>
                {data.map(game => <div className="Game" onClick={() => handleClick(game.fixture.id)}><img src={game.teams.home.logo} />{game.teams.home.name} - {game.teams.away.name}<img src={game.teams.away.logo} /></div>)}
            </div>
            <div className="Components">
                <Odds game={gameID}></Odds>
                <Prediction game={gameID}></Prediction>
            </div>
        </div>
    )
}
