import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css'
import './Styles/Sidebar.css'
import './Styles/Topbar.css'
import './Styles/Homevisual.css'
import './Styles/TopScorerWidget.css'
import './Styles/RankingsWidget.css'
import './Styles/LeagueSelector.css'
import './Styles/PlayersWidget.css'
import './Styles/PredictionWidget.css'


import App from './App.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
