import React from 'react';
import { NeuCard, NeuHeading, NeuProgressBar, NeuReaction,NeuInput,NeuButton } from 'neumorphic-ui';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App card">
      <header>
        <NeuHeading className="m-auto" text="Welcome to Neumorphic UI" fontSize="50px" fontWeight="900" />
      </header>
      <div className="m-auto p-3">
        <NeuCard width="350px" height="320px">
          Neumorphic Card
          <NeuReaction ><img src={logo} width="30px" height="30px" /></NeuReaction>
        <div className="p-2">
        <NeuProgressBar progress="80%" />
      </div>
      <NeuButton hovered={true} mouseOver={true} mouseOut={true} text="Neumorhpic Button" />
        </NeuCard>
      </div>
      
    </div>
  );
}

export default App;
