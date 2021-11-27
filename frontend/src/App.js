import React, { useState } from 'react';
import TopBar from './Containers/TopBar';
import SideBar from './Containers/SideBar';
import HomeVisual from './Containers/HomeVisual';
import TopScorerWidget from './Containers/TopScorerWidget';
import RankingsWidget from './Containers/RankingsWidget';


function App() {
  const [leagueID, setLeagueID] = useState(39)
  const [Selected, setSelected] = useState(["League", "League Selected", "League", "League"])
  console.log(leagueID)

  function handleClic(id, selec) {
    setLeagueID(id)
    setSelected(selec)
  }

  return (
    <div className="App">
      <SideBar></SideBar>
      <div className="CenterContent">
        <TopBar></TopBar>
        <HomeVisual></HomeVisual>
        <div className="Widgets">
          <div className="LeagueSelector">
            <h2>Select a <span className="HighlightedWord">league</span></h2>
            <div className={Selected[0]} onClick={() => handleClic(140, ["League Selected", "League", "League", "League"])}><span>Liga</span><img alt="logo" src="https://media.api-sports.io/football/leagues/140.png" /></div>
            <div className={Selected[1]} onClick={() => handleClic(39, ["League", "League Selected", "League", "League"])}><span>Premier League</span><img alt="logo" src="https://media.api-sports.io/football/leagues/39.png" /></div>
            <div className={Selected[2]} onClick={() => handleClic(78, ["League", "League", "League Selected", "League"])}><span>Bundesliga</span><img alt="logo" src="https://media.api-sports.io/football/leagues/78.png" /></div>
            <div className={Selected[3]} onClick={() => handleClic(61, ["League", "League", "League", "League Selected"])}><span>Ligue 1</span><img alt="logo" src="https://media.api-sports.io/football/leagues/61.png" /></div>
          </div>
          <RankingsWidget league={leagueID}></RankingsWidget>
          <TopScorerWidget league={leagueID}></TopScorerWidget>
        </div>
      </div>
    </div>
  );

}

export default App;
