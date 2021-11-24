import React from 'react';
import './App.css';
import Controller from './features/controller/Controller';
import Navigation from './features/navigation/Navigation';

type props = {}

const App:React.FC<props> = () => {
  return (
    <div className="App">
      <Controller><Navigation/>abc</Controller>
    </div>
  );
}

export default App;
