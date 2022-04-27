import React, {useEffect, useState} from 'react';
import './App.css';
import Create from './components/Create/Create';
import Summary from './components/Summary/Summary';
import Total from './components/Total/Total';

function App() {

  return (
    <div className="App">
      <h1>Įrašai</h1>
      <main>
        <Total />
        <Create />
        <Summary />
      </main>
    </div>
  );
}

export default App;
