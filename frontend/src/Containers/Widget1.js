// A RENOMMER PAR LE NOM DU WIDGET


import React from 'react'

function Widget1() {
    return (
        <div>
            <table className='Topscorer'>
                <tr><th className='Title'
                    colspan="2 "> <span>Best</span> SCORER</th></tr>
                <tr><th className='ColPlayer' scope="col"> <span>Player</span></th></tr>
                <tr><th className='Colgoals' scope="col"> <span> Goals</span></th></tr>

            </table>
        </div>
    )
}

export default Widget1










/*
import React from 'react';

export default class Widget1 extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch("https://v3.football.api-sports.io/players?league=61&search=payet", {
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