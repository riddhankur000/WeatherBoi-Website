import react from "react";
import Card from "./Card";

export default function Forecast(props){

    let forecast_data=Array.of(props.forecast[0],props.forecast[1],props.forecast[2],props.forecast[3],props.forecast[4],props.forecast[5]);
    // console.log(forecast_data[0].app_max_temp);
    return(
        <div className="forecast">
            <div className="Card_title">
                <h3>Date</h3>
                <div className="inCard">
                <p>Temperature</p>
                <p>Rain</p>
                <p>Wind Speed</p>
                <p>Direction</p>
                <p>clouds</p>
                <p>Condition</p>
                </div>
                
            </div>
            {/* {forecast_data.map((x,index) => {
            })} */}
            <Card   temp={props.forecast[0].temp} clouds={props.forecast[0].clouds} wind_cdir_full={props.forecast[0].wind_cdir_full} wind_spd={props.forecast[0].wind_spd} precip={props.forecast[0].precip} />
            
        </div>
    );
}