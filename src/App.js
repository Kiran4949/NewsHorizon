import './App.css';
import React, { useState } from 'react'
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  
  document.body.style = 'background: lavender	;';

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <BackToTopButton />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="top" pageSize={pageSize} country="in" category="top" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />

            <Route exact path="/world" element={<News setProgress={setProgress} apikey={apikey} key="world" pageSize={pageSize} country="in" category="world" />} />
            <Route exact path="/politics" element={<News setProgress={setProgress} apikey={apikey} key="politics" pageSize={pageSize} country="in" category="politics" />} />
            <Route exact path="/environment" element={<News setProgress={setProgress} apikey={apikey} key="environment" pageSize={pageSize} country="in" category="environment" />} />
            <Route exact path="/education" element={<News setProgress={setProgress} apikey={apikey} key="education" pageSize={pageSize} country="in" category="education" />} />
            <Route exact path="/crime" element={<News setProgress={setProgress} apikey={apikey} key="crime" pageSize={pageSize} country="in" category="crime" />} />

            <Route exact path="/domestic" element={<News setProgress={setProgress} apikey={apikey} key="domestic" pageSize={pageSize} country="in" category="domestic" />} />
            <Route exact path="/food" element={<News setProgress={setProgress} apikey={apikey} key="food" pageSize={pageSize} country="in" category="food" />} />
            <Route exact path="/lifestyle" element={<News setProgress={setProgress} apikey={apikey} key="lifestyle" pageSize={pageSize} country="in" category="lifestyle" />} />
            <Route exact path="/tourism" element={<News setProgress={setProgress} apikey={apikey} key="tourism" pageSize={pageSize} country="in" category="tourism" />} />
            <Route exact path="/other" element={<News setProgress={setProgress} apikey={apikey} key="other" pageSize={pageSize} country="in" category="other" />} />
          </Routes>
        </Router>
      </div>
    );
 
}

export default App;