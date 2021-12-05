import React, { useState, useEffect } from 'react'

//Autre API Key 
//021e9e258ba4d2039c51343eaeb44485
//f362f7602bfd94a69f2ccee18732fbd2 SUSPENDU

import StatsPlayersWidget from '../Components/StatsPlayersWidget';

export default function PlayersWidget() {
    const [userQuery, setUserQuery] = useState("messi");//"messi" //154
    const [data, setData] = useState([])
    const [change, setChange] = useState(0)

    /*useEffect(
        () => {
            let mounted = true;
            fetch(" https://v2.api-football.com/players/search/" + userQuery, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "021e9e258ba4d2039c51343eaeb44485"
                }
            })
                .then(response => response.json())
                .then((json) => {
                    if (mounted) {
                        console.log(json.api.players)
                        setData(json.api.players.sort(function (a, b) {
                            return a.player_id - b.player_id
                        }))
                    }
                })
            console.log("dans effect")
            console.log("change : ", change)
            return () => mounted = false
        }, [change]);*/

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setChange(change + 1)
        console.log(userQuery)
    }

    //UN LOADING

    return (
        <div className="PlayersWidget">
            <h2><span className="HighlightedWord">Search</span> the stats of your players</h2>

            <div className="MainContent">
                <div className="SearchBar">
                    <i class="fas fa-search"></i>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={userQuery} onChange={e => setUserQuery(e.target.value)} placeholder="Name of a player (ex: 'Neymar')" />
                        <input className="Submit" type="submit" value="Submit"></input>
                    </form>
                </div>
                <StatsPlayersWidget player_id={parseInt(data.slice(0, 1).map(player => player.player_id))}></StatsPlayersWidget>
            </div>
        </div>
    )
}
//remplacer change ligne 54 par : data.slice(0, 1).map(player => player.player_id) peut etre player.player.