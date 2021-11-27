// A RENOMMER PAR LE NOM DU WIDGET

//autre key : "c742f7706995d0d8efeb6d3002dc638b"

import React, { useState, useEffect } from 'react'


function TopScorerWidget(props) {
    const [data, setData] = useState([]);

    /*useEffect(() => {
        let mounted = true;

        fetch("https://v3.football.api-sports.io/players/topscorers?league=" + props.league + "&season=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "f362f7602bfd94a69f2ccee18732fbd2"
            }
        })
            .then(response => response.json())
            .then((json) => {
                if (mounted) {
                    console.log(json.response)
                    setData(json.response)
                }
            })
        return () => mounted = false
    }, [props.league]);*/

    /*if (data == null) return (
        <div className='TopScorer'>
            <div>
                <h2><span className="HighlightedWord">Best</span> Scorers</h2>
                <div className="Infos">
                    <p>Player</p>
                    <p>Goals</p>
                </div>
            </div>
            <div className="Players">

                Loading
            </div>
        </div>)*/

    return (
        <div className='TopScorer'>
            <div>
                <h2><span className="HighlightedWord">Best</span> Scorers</h2>
                <div className="Infos">
                    <p>Player</p>
                    <p>Goals</p>
                </div>
            </div>
            <div className="Players">

                {data.slice(0, 10).map(
                    player =>
                        <div className="PlayerStats">
                            <p>{player.player.name}</p>
                            <p>{player.statistics[0].goals.total}</p>
                        </div>
                )}
            </div>
        </div>
    )
}

export default TopScorerWidget


/*fetch("https://v3.football.api-sports.io/players/topscorers?league=61&season=2020", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c742f7706995d0d8efeb6d3002dc638b",
            }
        }).then((response) => {
            return response.json()
        })
            .then((result) => {
                let tab = [];
                for (let x = 0; x < 5; x++) {
                    console.log(result.response[x].player.name)
                    tab.push(result.response[x].player.name)
                }
                setData(tab)
            })*/
