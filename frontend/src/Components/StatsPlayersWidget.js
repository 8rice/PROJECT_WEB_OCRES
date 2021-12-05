import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-3'

export default function StatsPlayersWidget(props) {
    const [data, setData] = useState([{
        "player": {
            "id": 276,
            "name": "Neymar",
            "firstname": "Neymar",
            "lastname": "da Silva Santos Júnior",
            "age": 28,
            "birth": {
                "date": "1992-02-05",
                "place": "Mogi das Cruzes",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "175 cm",
            "weight": "68 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/276.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 85,
                    "name": "Paris Saint Germain",
                    "logo": "https://media.api-sports.io/football/teams/85.png"
                },
                "league": {
                    "id": 61,
                    "name": "Ligue 1",
                    "country": "France",
                    "logo": "https://media.api-sports.io/football/leagues/61.png",
                    "flag": "https://media.api-sports.io/flags/fr.svg",
                    "season": 2019
                },
                "games": {
                    "appearences": 15,
                    "lineups": 15,
                    "minutes": 1322,
                    "number": null,
                    "position": "Attacker",
                    "rating": "8.053333",
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 3,
                    "bench": 0
                },
                "shots": {
                    "total": 70,
                    "on": 36
                },
                "goals": {
                    "total": 13,
                    "conceded": null,
                    "assists": 6,
                    "saves": 0
                },
                "passes": {
                    "total": 704,
                    "key": 39,
                    "accuracy": 79
                },
                "tackles": {
                    "total": 13,
                    "blocks": 0,
                    "interceptions": 4
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": 143,
                    "success": 88,
                    "past": null
                },
                "fouls": {
                    "drawn": 62,
                    "committed": 14
                },
                "cards": {
                    "yellow": 3,
                    "yellowred": 1,
                    "red": 0
                },
                "penalty": {
                    "won": 1,
                    "commited": null,
                    "scored": 4,
                    "missed": 1,
                    "saved": null
                }
            }
        ]
    }])

    /*useEffect(() => {
        let mounted = true
        fetch("https://v3.football.api-sports.io/players?id=" + props.player_id + "&season=2021", {
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


    }, [props.player_id]);*/


    return (
        <div className="StatsPlayersWidget">
            <div className="LeftContent">
                <div className="PlayerInfos">
                    <div>
                        {data.slice(0, 1).map(player => <p>{player.player.firstname}</p>)}
                        {data.slice(0, 1).map(player => <p>{player.player.lastname}</p>)}
                        {data.slice(0, 1).map(player => <p>{player.player.birth.date}</p>)}
                        {data.slice(0, 1).map(player => <p>{player.player.height}</p>)}
                        {data.slice(0, 1).map(player => <p>{player.player.nationality}</p>)}
                        {data.slice(0, 1).map(player => <p>{player.statistics[0].team.name}<img alt="PlayerTeamPic" src={data.slice(0, 1).map(player => player.statistics[0].team.logo)} /></p>)}
                    </div>
                    <img alt="PlayerPic" className="PlayerPic" src={data.slice(0, 1).map(player => player.player.photo)} />
                </div>
            </div>
            <div className="Bar">
                <Bar
                    width="500"
                    height="280"
                    data={
                        {
                            labels: ['Appearances', 'Goals', 'Assistances', 'Tackles', 'Yellow Cards', 'Red Cards'],
                            datasets: [{
                                label: 'Data on player',
                                data: [parseInt(data.map(player => player.statistics[0].games.appearences)), parseInt(data.map(player => player.statistics[0].goals.total)), parseInt(data.map(player => player.statistics[0].goals.assists)), parseInt(data.map(player => player.statistics[0].tackles.total)), parseInt(data.map(player => player.statistics[0].cards.yellow)), parseInt(data.map(player => player.statistics[0].cards.yellowred)) + parseInt(data.map(player => player.statistics[0].cards.red))],
                                backgroundColor: [
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 99, 132, 1)'
                                ],
                            }]
                        }
                    }
                    options={
                        {
                            maintainAspectRatio: true,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                    gridLines: {
                                        display: true,
                                        color: 'rgba(196, 196, 196, 0.1)',
                                    },

                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: false,
                                    }
                                }]
                            }
                        }
                    }
                />
            </div>

        </div>
    )
}
