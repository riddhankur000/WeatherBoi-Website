import react from "react";
import { WiThermometerExterior } from "react-icons/wi";

export default function Temperature(props){

    return(
        <div className="temp">
            <h2><WiThermometerExterior/></h2>
            <div className="current_temp">Current : {props.weather_data.app_temp}</div>
            <div className="max_min_temp">
                <div><h3>Max</h3><p>{props.forecast.max_temp}°c</p></div>
                <div><h3>Min</h3><p>{props.forecast.min_temp}°c</p></div>
            </div>
        </div>
    );
}