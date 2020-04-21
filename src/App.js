import React, { useRef, useState } from 'react';
import './App.css';
import Searchbox from './Components/searchbox';
import Dashboard from './Components/dashboard';
function App(props) {
  const dashboardRef = useRef();
  let [games, setGames] = useState([]);
  const inputHandler = (searchValue) => {
    dashboardRef.current.inputHandler(searchValue);
  }
  const setGamesData = (data) => {
    setGames(data);
  }
  return (
    <div className="App">
      <Searchbox searchInputHandler={(event) => inputHandler(event)} games={games} />
      <div className="dashboardClass">
        <Dashboard ref={dashboardRef} setGamesData={setGamesData} />
      </div>
    </div>
  );
}

export default App;
