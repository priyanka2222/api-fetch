import React, { Component } from 'react'
import axios from 'axios'

export default class WeatherDisplay extends Component {
    constructor(){
        super();
        this.state = {
            weatherData: null
        }
        this.getData = this.getData.bind(this);
    }
    componentDidMount(){
        this.getData();
    }
    getData() {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=307aa21551b6145be2624af274afeab0";
    axios.get(apiUrl)
    .then(response => response.data)
    .then(data => this.setState({weatherData: data}))
    .catch((err) => {console.log(err.message);});
}
  render() {
    let {weatherData} = this.state;
    console.log(weatherData)
    return (
      <section>
        <h1>Weather Today Priyanka Sidgiddi</h1>
        {
            (weatherData) ?
            <>
            <table>
                <tbody>
                    {
                        Object.keys(weatherData.coord).map((key, i)=>(
                            <tr key={i}>
                                <td><label>{key}</label></td>
                                <td><input readOnly disabled value={weatherData.coord[key]}/></td>
                            </tr>
                        ))
                    }
                    {
                        Object.keys(weatherData.main).map((key, i)=>(
                            <tr key={i}>
                                <td><label>{key}</label></td>
                                <td><input readOnly disabled value={weatherData.main[key]}/></td>
                            </tr>
                        ))
                    }
                    {
                        Object.keys(weatherData.wind).map((key, i)=>(
                            <tr key={i}>
                                <td><label>{key}</label></td>
                                <td><input readOnly disabled value={weatherData.wind[key]}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </> : <div>Data Not Available</div>
        }
      </section>
    )
  }
}
