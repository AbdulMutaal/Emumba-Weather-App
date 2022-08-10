import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazyLoad } from "./utils/loadable";
import { routes } from "./router/routes";
import './App.css';

const WeatherPage = lazyLoad(() => import("./pages/weather/Weather"));

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path={routes.weatherPage} element={<WeatherPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
