import logo from './logo.svg';
import './App.css';
import HTMLIde from './components/HTMLIde'
import React from 'react';

function App() {
  return (
    <div>
      <HTMLIde content="<p>Hello world</p>" setContent={() => true}/>
    </div>
  );
}

App.displayName = "A11y Quiz"

export default App;
