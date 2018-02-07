import React, {Component} from 'react';
import {bindActionCreators} from 'react';
import {connect} from 'react-redux';
import WeatherPlot from "../components/weather-plot";
import GoogleMap from "../components/google-map";

class WeatherList extends Component {
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const {lat, lon} = cityData.city.coord;


        return (
            <tr key={cityName}>
                <td><GoogleMap lat={lat} lon={lon}/> </td>
                <td>
                    <WeatherPlot data={cityData.list.map(elem=>elem.main.temp)} color="green" units="k"/>
                </td>
                <td>
                    <WeatherPlot data={cityData.list.map(elem=>elem.main.pressure)} color="red" units="hPa"/>
                </td>
                <td>
                    <WeatherPlot data={cityData.list.map(elem=>elem.main.humidity)} color="blue" units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);