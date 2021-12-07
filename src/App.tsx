import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {RoutesBlock} from "./components/RoutesBlock/RoutesBlock";

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <RoutesBlock/>
    </div>
  );
}

