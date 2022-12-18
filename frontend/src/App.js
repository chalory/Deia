import IdeWrapper from "./components/IdeWrapper";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chapter from "./components/Chapter/Chapter";

import Landing from "./routes/Landing/Landing.route";
import Menu from "./routes/Menu/Menu.route";
import Dyslexia from "./components/Dyslexia/Dyslexia";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/chapters/:id" element={<Chapter />}></Route>
                    <Route path="/dyslexia/:id" element={<Dyslexia />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

App.displayName = "A11y Quiz";

export default App;
