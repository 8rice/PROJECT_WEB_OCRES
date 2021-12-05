import React, { useState, useEffect } from 'react'

export default function Odds(props) {
    const [data, setData] = useState([])

    /*useEffect(() => {
        let mounted = true
        fetch("https://v3.football.api-sports.io/odds?fixture=" + props.game, {
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


    }, [props.game]);*/

    if (props.game == 0) return (
        <div className="Odds">
            <h2><span className="HighlightedWord">Odds</span></h2>
        </div>
    )
    return (
        <div className="Odds">
            <h2><span className="HighlightedWord">Odds</span></h2>
            <div className="AllOdds">
                <div className="Winner">
                    {data.map(odd => <h3>{odd.bookmakers[0].bets[0].name}</h3>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[0].values[0].value} : {odd.bookmakers[0].bets[0].values[0].odd}</p>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[0].values[1].value} : {odd.bookmakers[0].bets[0].values[1].odd}</p>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[0].values[2].value} : {odd.bookmakers[0].bets[0].values[2].odd}</p>)}
                </div>
                <div className="Goals">
                    {data.map(odd => <h3>{odd.bookmakers[0].bets[4].name}</h3>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[4].values[0].value} : {odd.bookmakers[0].bets[4].values[0].odd}</p>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[4].values[1].value} : {odd.bookmakers[0].bets[4].values[1].odd}</p>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[4].values[2].value} : {odd.bookmakers[0].bets[4].values[2].odd}</p>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[4].values[3].value} : {odd.bookmakers[0].bets[4].values[3].odd}</p>)}
                </div>
                <div className="BothTeamScore">
                    {data.map(odd => <h3>{odd.bookmakers[0].bets[10].name}</h3>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[10].values[0].value} : {odd.bookmakers[0].bets[10].values[0].odd}</p>)}
                    {data.map(odd => <p>{odd.bookmakers[0].bets[10].values[1].value} : {odd.bookmakers[0].bets[10].values[1].odd}</p>)}
                </div>
            </div>
        </div>
    )
}
