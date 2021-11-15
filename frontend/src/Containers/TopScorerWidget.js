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
                    <tr><th className='Title' colspan="3">  <h2> <span>Best</span> SCORERS </h2></th></tr>
                    <tr><th className='ColPlayer'> <h3><span>Player</span></h3></th>
                    <th className='Colgoals'><h3><span>Goals</span></h3></th> </tr>
                </thead>

                <tbody>
                    <tr> <td colspan="3"><h4>Lionel Messi</h4> </td>  <td colspan="3"><h4>12</h4> </td> </tr>
                    <tr> <td colspan="3"><h4>Robert Lewandowski</h4> </td>  <td colspan="3"><h4>12</h4> </td> </tr>
                    <tr> <td colspan="3"><h4>Neymar </h4> </td>  <td colspan="3"><h4>7</h4> </td> </tr>
                    <tr> <td colspan="3"><h4>Cristiano Ronaldo</h4> </td>  <td colspan="3"><h4>12</h4> </td> </tr>
                    <tr> <td colspan="3"><h4>Kylian Mbappe</h4> </td>  <td colspan="3"><h4>12</h4> </td> </tr>
                    <tr> <td colspan="3"><h4>Erling Haaland</h4> </td>  <td colspan="3"><h4>12</h4> </td> </tr>
                    <tr> <td colspan="3"><h4>Jorginho</h4> </td>  <td colspan="3"><h4>12</h4> </td> </tr>
                    <tr> <td colspan="3"><h4>Bruno Fernandes</h4> </td>  <td colspan="3"><h4>12</h4> </td> </tr>
                </tbody>

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