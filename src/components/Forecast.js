import react from "react";
import Card from "./Card";

export default function Forecast(props){
    // let [x,setx] =react.useState(0);
    // console.log((props.clouds[0]));
    // let forecast_data=Array.of(props.forecast[0],props.forecast[1],props.forecast[2],props.forecast[3],props.forecast[4]);
    // console.log(props.forecast[0]);
    return(
        <div className="forecast">
            <div className="Card_title">
                <h3>Date</h3>
                <div className="inCard" id="inCard_">
                <p>Temperature (°c)</p>
                <p>Rain (mm)</p>
                <p>Wind Speed(Km/hr)</p>
                <p>Direction</p>
                <p>clouds (%)</p>
                {/* <p>{props.clouds[0]}</p> */}
                </div>
                
            </div>
            {[1,2,3,4,5,6,7,8,9].map((x,index) => {
                   return <Card  id={x} datetime={props.datetime[x]} temp={props.temps[x]} clouds={props.clouds[x]} wind_cdir_full={props.wind_cdir_full[x]} wind_spd={props.wind_spd[x]} precip={props.precip[x]} />
            } )}
            
            
            
        </div>
    );
}