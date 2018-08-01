import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    SUN,
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont" >
        <WeatherTemperature 
            temperature={20} 
            weatherState={SUN} 
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;