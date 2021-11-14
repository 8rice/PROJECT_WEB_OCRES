// A RENOMMER PAR LE NOM DU WIDGET


import React, { useState } from 'react'

function TopScorerWidget() {
    const [data, setData] = useState(null);

    function componentDidMount() {
        fetch("https://v3.football.api-sports.io/players/topscorers?league=61&season=2020", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f362f7602bfd94a69f2ccee18732fbd2",
            }
        }).then((response) => {
            return response.json()
        })
            .then((result) => {
                console.log(result.response[0].player.name)
                setData(result.response[0].player.name)
            })
    }
    componentDidMount();
    return (
        <div className='TopScorer'>
            <table>
                <thead>
                    <tr><th className='Title' colspan="3"> <span>Best</span> SCORER</th></tr>

                    <tr><th className='ColPlayer' scope="col"> <span>Player</span></th>
                        <th className='Colgoals' scope="col"> <span> Goals</span></th></tr>
                </thead>
            </table>
            {data}
        </div>
    )
}

export default TopScorerWidget


/*
import React from 'react';

export default class Widget1 extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch("https://v3.football.api-sports.io/players/topscorers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f362f7602bfd94a69f2ccee18732fbd2",
            }
        }).then((response) => {
            return response.json()
        })
            .then((result) => {
                this.setState(
                    { data: result.response[0].player.name }
                )
                console.log(result.response[0].player.name)
                console.log(result.response[0].statistics.goals.total)
            })
    }


    render() {
        return (
            <div>
                Hello
                <p> {this.state.data}</p>
            </div >
        );
    }
}
*/