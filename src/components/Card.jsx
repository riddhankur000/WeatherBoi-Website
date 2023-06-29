import react from "react";

export default function Card(props){
    // {props.datetime}
    return(
        <div className="Card">
                <h3></h3>
                <div className="inCard">
                    <p>{props.temp}</p>
                    <p>{props.precip} mm</p>
                    <p>{props.wind_spd}</p>
                    <p>{props.wind_cdir_full}</p>
                    <p>{props.clouds}</p>
                    {/* <p>Condition</p> */}
                </div>
                
            </div>
    );
}