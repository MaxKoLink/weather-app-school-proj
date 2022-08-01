import React, { useState } from "react";
import axios from "axios";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=3d9c186ef5accae2b84eec397ff2f816`;
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Brno</p>
          </div>
          <div className="temp">
            <h2>35</h2>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>34</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">12 km/s</div>
        </div>
      </div>
    </div>
  );
}

export default App;
