import IdeWrapper from './components/IdeWrapper'
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Menu from './components/menu.route';
import Landing from  './components/landing.route';


function App() {
  return (
    <Router>
    <div className="App">
      {/* <IdeWrapper content="<p>Hello world</p>" setContent={() => true}/> */}
      <Routes>
                 <Route exact path='/' element={< Landing />}></Route>
                 <Route exact path='/menu' element={< Menu/>}></Route>
          </Routes>
    </div>
    </Router>
  );
}

App.displayName = "A11y Quiz"

export default App;
