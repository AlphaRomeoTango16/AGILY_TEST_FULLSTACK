import React from 'react'
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import GlobalStyle from './asset/style/GlobalStyle';
import Home from './pages/home/Home'
import Weather from './pages/weather/Weather'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/weather' element={<Weather />} />
        </Routes>
    </Router>
  </React.StrictMode>
);
