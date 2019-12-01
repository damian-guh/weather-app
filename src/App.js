import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    weather: "",
    temperature: "",
    date: "",
    time: "",
    icon: ""
  }
  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=769250&appid=18596add115407bec2e7c6f7f30c6f64&units=metric")
      .then(res => res.json())
      .then(data => this.setState({
        weather: [data.list[0].weather[0].description, data.list[1].weather[0].description, data.list[2].weather[0].description, data.list[3].weather[0].description, data.list[4].weather[0].description],
        temperature: [data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp, data.list[3].main.temp, data.list[4].main.temp],
        date: [data.list[0].dt_txt, data.list[1].dt_txt, data.list[2].dt_txt, data.list[3].dt_txt, data.list[4].dt_txt].map(item => {
          return item.slice(0, 10) //yy-mm-dd
        }),
        time: [data.list[0].dt_txt, data.list[1].dt_txt, data.list[2].dt_txt, data.list[3].dt_txt, data.list[4].dt_txt].map(item => {
          return Number(item.slice(11, 13)) + 1; //only hours in UTC+1
        }),
        icon: [data.list[0].weather[0].icon, data.list[1].weather[0].icon, data.list[2].weather[0].icon, data.list[3].weather[0].icon, data.list[4].weather[0].icon]
      }),

      )
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Weather App</h1>
          <h3>Kielce</h3>
        </header>
        <main>
          <div className="weatherContainer">
            <p className="day">{this.state.date[0]}</p>
            <p className="time">{this.state.time[0] < 10 ? `0${this.state.time[0]}` : this.state.time[0]}:00</p>
            <p className="weatherDesc">{this.state.weather[0]}</p>
            <img src={`http://openweathermap.org/img/wn/${this.state.icon[0]}@2x.png`} alt={this.state.weather[0]} />
            <p className="temperature">{Math.floor(this.state.temperature[0])}<sup>°</sup></p>
          </div>
          <div className="weatherContainer">
            <p className="day">{this.state.date[1]}</p>
            <p className="time">{this.state.time[1] < 10 ? `0${this.state.time[1]}` : this.state.time[1]}:00</p>
            <p className="weatherDesc">{this.state.weather[1]}</p>
            <img src={`http://openweathermap.org/img/wn/${this.state.icon[1]}@2x.png`} alt={this.state.weather[1]} />
            <p className="temperature">{Math.floor(this.state.temperature[1])}<sup>°</sup></p>
          </div>
          <div className="weatherContainer">
            <p className="day">{this.state.date[2]}</p>
            <p className="time">{this.state.time[2] < 10 ? `0${this.state.time[2]}` : this.state.time[2]}:00</p>
            <p className="weatherDesc">{this.state.weather[2]}</p>
            <img src={`http://openweathermap.org/img/wn/${this.state.icon[2]}@2x.png`} alt={this.state.weather[2]} />
            <p className="temperature">{Math.floor(this.state.temperature[2])}<sup>°</sup></p>
          </div>
          <div className="weatherContainer">
            <p className="day">{this.state.date[3]}</p>
            <p className="time">{this.state.time[3] < 10 ? `0${this.state.time[3]}` : this.state.time[3]}:00</p>
            <p className="weatherDesc">{this.state.weather[3]}</p>
            <img src={`http://openweathermap.org/img/wn/${this.state.icon[3]}@2x.png`} alt={this.state.weather[3]} />
            <p className="temperature">{Math.floor(this.state.temperature[3])}<sup>°</sup></p>
          </div>
          <div className="weatherContainer">
            <p className="day">{this.state.date[4]}</p>
            <p className="time">{this.state.time[4] < 10 ? `0${this.state.time[4]}` : this.state.time[4]}:00</p>
            <p className="weatherDesc">{this.state.weather[4]}</p>
            <img src={`http://openweathermap.org/img/wn/${this.state.icon[4]}@2x.png`} alt={this.state.weather[4]} />
            <p className="temperature">{Math.floor(this.state.temperature[4])}<sup>°</sup></p>
          </div>
        </main>
        <footer>Created by Damian Głuch</footer>
      </div>
    );
  }
}

export default App;


