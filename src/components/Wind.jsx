import react from "react";
import { WiStrongWind } from "react-icons/wi";

export default function Wind(props){

    return(
        <div className="wind">
            <h2><WiStrongWind fontSize="40px"/> &nbsp; Wind</h2>
            <div className="wind_info"><p><b>Direction : </b></p> <p>{props.weather_data.wind_cdir_full}</p></div>
            <div className="wind_info"><p><b>Speed : </b></p> <p>{props.weather_data.wind_spd} &nbsp;Km/hr</p></div>
            <div className="wind_info"><p><b>Gust Speed : </b></p> <p>{props.weather_data.gust?props.weather_data.gust:0} &nbsp;Km/hr</p></div>
        </div>
    );
}