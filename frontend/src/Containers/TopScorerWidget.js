// A RENOMMER PAR LE NOM DU WIDGET


import React, { useState } from 'react'

function TopScorerWidget() {
    /* const [data, setData] = useState(null);
 
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
       */
    return (
        <div className='TopScorer'>
            <table>
                <thead>
                    <tr><th className='Title' colspan="4">  <h2> <span>Best</span> SCORERS </h2></th></tr>
                    <th className='ColPlayer' scope="col"> <h3><span>Player</span></h3></th>
                    <th className='Colgoals' scope="col"> <h3><span>Goals</span></h3></th>
                </thead>
            </table>

        </div>
    )
}

export default TopScorerWidget

// {data}
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