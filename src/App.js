import React, { useRef, useState } from 'react';
import './App.css';
import Searchbox from './Components/searchbox';
import Dashboard from './Components/dashboard';
import Pagination from './Components/pagination';
function App(props) {
  const dashboardRef = useRef();
  let [games, setGames] = useState([]);
  let [currentPage,setCurrentPage] = useState(1);
  let [totalPages,setTotalPages] = useState(0);
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
        <Dashboard ref={dashboardRef} setGamesData={setGamesData} setTotalPages={(value)=>setTotalPages(value)} currentPage={currentPage}/>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageClick={(pageNum)=>setCurrentPage(pageNum)}/>
    </div>
  );
}

export default App;
