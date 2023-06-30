import react from "react";
import {WiCloudy} from 'react-icons/wi';
import {WiHumidity} from 'react-icons/wi';
import {WiRaindrops} from 'react-icons/wi';
// import {WiCloudy} from 'react-icons/wi';
// import {WiCloudy} from 'react-icons/wi';
// import {WiCloudy} from 'react-icons/wi';

export default function Air_Quality(props){

    return(
        <div className="air">
            <h2>Air Quality</h2>
            <div className="air_qu">
                <div className="in_air_qu">
                    <div className="air_info"><p><WiCloudy fontSize="30px"/></p><span><b> Cover : </b></span> <span>&nbsp;{props.weather_data.clouds}%</span></div>
                    <div className="air_info"><p><b>Dew :</b></p> <p>&nbsp;{props.weather_data.dewpt}</p></div>
                    <div className="air_info"><p><b>probability of &nbsp;</b></p><p id="water_drop"><WiRaindrops fontSize="20px"/></p> <p>&nbsp;:</p> <p>&nbsp;&nbsp;{props.forecast.pop}</p></div>
                </div>
                <div className="in_air_qu">
                    <div className="air_info"><p><b>Pressure : </b></p> <p>&nbsp;{props.weather_data.pres}</p></div>
                    <div className="air_info"><p><WiHumidity fontSize="30px"/></p><p><b>Humidity : </b></p> <p>&nbsp;{props.weather_data.rh}</p></div>
                    {/* <div className="air_info"><p><b>Thunder Storm : </b></p> <p>{props.weather_data.weather.description}</p></div> */}
                </div>
            </div>          
        </div>
    );
}