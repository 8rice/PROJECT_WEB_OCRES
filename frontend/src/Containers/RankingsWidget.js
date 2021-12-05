import React, { useState, useEffect } from 'react'

export default function RankingsWidget(props) {
    const [data, setData] = useState([])

    /*useEffect(() => {
        let mounted = true
        fetch("https://v3.football.api-sports.io/standings?league=" + props.league + "&season=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "f362f7602bfd94a69f2ccee18732fbd2"
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
    }, [props.league]);*/
    return (
        <div className="RankingsWidget">
            {data.map(league =>
                <div>
                    <div className="LeagueInfos">
                        <h2>{league.league.name}</h2>
                        <img alt="logo" src={league.league.logo} />
                    </div>
                    {league.league.standings[0].map(
                        team =>
                            <div className="TeamRank">
                                <div className="TeamInfos">
                                    <p>{team.rank}</p>
                                    <div>
                                        {team.team.name}
                                        <img alt="logo" src={team.team.logo} />
                                    </div>
                                </div>
                                <div className="TeamPoints">
                                    {team.points}
                                </div>
                            </div>)}
                </div>)}
        </div>
    )
}
