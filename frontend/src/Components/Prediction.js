import React, { useState, useEffect } from 'react'
import { Radar } from 'react-chartjs-3'

export default function Prediction(props) {
    const [data, setData] = useState([])

    /*useEffect(() => {
        let mounted = true
        fetch("https://v3.football.api-sports.io/predictions?fixture=" + props.game, {
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


    }, [props.game]);*/

    /*if (props.game == 0) return (
        <div className="Prediction">
            <h2><span className="HighlightedWord">Prediction : </span>Pick a game</h2>

        </div>
    )*/
    return (
        <div className="Prediction">
            <h2><span className="HighlightedWord">Prediction </span>{data.map(game => game.predictions.winner.name)}</h2>
            <div className="Percentage">
                <p>Percentage : </p>
                {data.map(game => <div> Home {game.predictions.percent.home}</div>)}
                {data.map(game => <div> Draw {game.predictions.percent.draw}</div>)}
                {data.map(game => <div> Away {game.predictions.percent.away}</div>)}
            </div>
            <div className="Radar">
                <Radar
                    width="400"
                    height="400"
                    data={
                        {
                            labels: [
                                'Goals',
                                'Form',
                                'Attacking',
                                'Defensive',
                                'Head2head'
                            ],
                            datasets: [{
                                label: data.map(game => game.teams.home.name),
                                data: [parseInt(data.map(game => game.comparison.goals.home)), parseInt(data.map(game => game.comparison.form.home)), parseInt(data.map(game => game.comparison.att.home)), parseInt(data.map(game => game.comparison.def.home)), parseInt(data.map(game => game.comparison.h2h.home))],
                                fill: true,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgb(255, 99, 132)',
                                pointBackgroundColor: 'rgba(255, 99, 132, 0.5)',
                                pointHoverBackgroundColor: '#fff'
                            }, {
                                label: data.map(game => game.teams.away.name),
                                data: [parseInt(data.map(game => game.comparison.goals.away)), parseInt(data.map(game => game.comparison.form.away)), parseInt(data.map(game => game.comparison.att.away)), parseInt(data.map(game => game.comparison.def.away)), parseInt(data.map(game => game.comparison.h2h.away))],
                                fill: true,
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgb(54, 162, 235)',
                                pointBackgroundColor: 'rgb(54, 162, 235, 0.5)',
                                pointHoverBackgroundColor: '#fff'
                            }]
                        }
                    }
                    options={
                        {
                            scale: {
                                ticks: {
                                    min: 0,
                                    max: 100,
                                    stepSize: 20,
                                    showLabelBackdrop: false
                                },
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}
