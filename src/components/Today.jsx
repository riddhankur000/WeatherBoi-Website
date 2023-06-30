import react from "react";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Air_Quality from "./Air_Quality";
import Sun_Moon from "./Sun_Moon";

export default function Today(props){
    return(
        <div className="today">
            <Temperature weather_data={props.weather_data} forecast={props.forecast}/>
            <Wind weather_data={props.weather_data} forecast={props.forecast}/>
            <Sun_Moon weather_data={props.weather_data} forecast={props.forecast} gmt={props.gmt}/>
            <Air_Quality  weather_data={props.weather_data} forecast={props.forecast}/>
        </div>
    );
}