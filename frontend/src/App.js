import logo from './logo.svg';
import './App.css';
import IdeWrapper from './components/IdeWrapper'
import React from 'react';

function App() {
  return (
    <div>
      <IdeWrapper content="<p>Hello world</p>" setContent={() => true}/>
    </div>
  );
}

App.displayName = "A11y Quiz"

export default App;
