import IdeWrapper from './components/IdeWrapper'
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Menu from './components/menu.route';
import Landing from  './components/landing.route';

import Chapter from './components/Chapter';
// import Chapters from './routes/Chapters.route';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
                 <Route  path='/' element={< Landing />}></Route>
                 <Route  path='/menu' element={< Menu/>}></Route>
                 <Route  path='/chapter/:id' element={<Chapter />}></Route>
        </Routes>
      </Router>
    </div>


  );
}

App.displayName = "A11y Quiz"

export default App;
