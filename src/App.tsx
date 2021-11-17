import React from 'react';
import './App.css';
import Navigation from './features/navigation/Navigation';

type props = {}

const App:React.FC<props> = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
    </div>
  );
}

export default App;
