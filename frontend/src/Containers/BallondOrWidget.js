import React, { useState, useEffect } from 'react'
import ballon from '../Assets/ballondOr.png'

export default function BallondOr() {
    const [year, setYear] = useState(2000)
    const [data, setData] = useState({})
    const [value, setValue] = useState()

    useEffect(() => {
        let mounted = true
        fetch("http://localhost:8080/ballondor/findone/" + year, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((res) => {

                console.log(res)
                setData(res)

            })
        return function cleanup() {
            mounted = false
        }
    }, [year]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setYear(value);
    }

    return (
        <div className="BallondOr">
            <div className="BallondOrTop">
                <h2>Ballon d'<span className="HighlightedWord">or</span></h2>
                <div className="SearchBar">
                    <i class="fas fa-search"></i>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={e => setValue(e.target.value)} placeholder="Search for a year" />
                        <input className="Submit" type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
            <div className="BallondOrBottom">
                <div className="LeftContent">
                    <div className="Infos">
                        <img src={data.img} />
                        <div>
                            <p>{data.Complete_name}</p>
                            <p>{data.Country}</p>
                            <p>{data.Team}</p>
                            <p>{data.Position}</p>
                        </div>
                    </div>
                    <div className="Description">
                        <p>{data.Description}</p>
                    </div>
                </div>
                <div className="RightContent">
                    <h2><span className="HighlightedWord">{data.Year}</span></h2>
                    <img alt="ballondOr" src={ballon} />
                </div>
            </div>
        </div>
    )
}
