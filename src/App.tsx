import React from 'react';
import './App.css';
import Controller from './components/controller/Controller';
import Navigation from './components/navigation/Navigation';
import { store } from './app/store';
import { Provider } from 'react-redux';

type props = {}

const App:React.FC<props> = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Controller>
          <Navigation/>
          abc
        </Controller>
      </div>
    </Provider>
  );
}

export default App;
