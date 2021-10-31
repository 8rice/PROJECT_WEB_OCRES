import React from 'react';
import TopBar from './Containers/TopBar';
import SideBar from './Containers/SideBar';
import HomeVisual from './Containers/HomeVisual';




/*fetch("https://v3.football.api-sports.io/players?league=61&search=payet", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "f362f7602bfd94a69f2ccee18732fbd2",
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

*/

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div className="CenterContent">
        <TopBar></TopBar>
        <HomeVisual></HomeVisual>
      </div>
    </div>
  );

}

export default App;
