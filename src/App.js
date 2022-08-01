import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3d9c186ef5accae2b84eec397ff2f816`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter location"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">{data.main ? <h2>{data.main.temp}</h2> : null}</div>
          <div className="description">{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
