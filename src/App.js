import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PaginationTable from './paginationTable';
import SankeyGraph from './sankeyGraph';

function App() {
  const [showGraph, setShowGraph] = useState(false);
  const showGraphCallback = () => {
    console.log('loaded');
    setShowGraph(true)
  };

  useEffect(()=> {
    window.addEventListener('load', showGraphCallback);
    return ()=> window.removeEventListener('load', showGraphCallback)
  }, []);

  return (
    <div className="App">
      {/* <PaginationTable /> */}
      {
        showGraph && (
          <SankeyGraph />
        )
      }
    </div>
  );
}

export default App;
