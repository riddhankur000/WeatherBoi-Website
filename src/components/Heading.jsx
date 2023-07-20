import react from "react";
import Icon from "./Icon";
// import { FiWind } from 'react-icons/fa';
import { WiStrongWind } from "react-icons/wi";

export default function Heading(props){

    
    console.log(props.des);
    const value=props.weather_data.aqi
    var air_quality;
    if(value>0&&value<=50){
        air_quality="Good";
    }
    else if(value>50&&value<=100){
        air_quality="Moderate";
    }
    else if(value>100&&value<=150){
        air_quality="Unhealthy for Sensitive Groups	";
    }
    else if(value>150&&value<=200){
        air_quality="Unhealthy";
    }
    else if(value>150&&value<=200){
        air_quality="Very Unhealthy";
    }
    else{
        air_quality="Hazardous";
    }

    return(
        <div className="live_weather_main">
            <div className="p1">
                <h2>{props.city_name} <Icon code={props.code}/></h2>
                <p className="timezone" style={{fontSize:"25px"}}>{props.timezone} </p>
                <p>{props.date_time} {props.gmt} GMT</p>
            </div>
            <div className="p2">
                {/* <div id="icon"><img src={iconurl} alt="" /></div> */}
                <p>{props.weather_data.temp} °C</p>
                {/* <h3>{true?"Day":"Night"}</h3> */}
                <h3>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            </div>
            
            <div className="p3">
                <p className="p4" id="description">{props.des}</p>
                <p className="p4"><div><WiStrongWind/></div> <p>&nbsp; &nbsp;</p> {props.weather_data.wind_spd}  <p>&nbsp; &nbsp;</p>   <p>Km/hr</p></p>
                <p className="p4"><p>Air Quality : </p><p> &nbsp; {air_quality}</p></p>
            </div>
            
        </div>
    );
}