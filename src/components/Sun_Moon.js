import react from "react";
import { WiDaySunny } from "react-icons/wi";

export default function Sun_Moon(props){


    function convertMS( milliseconds ) {
        var day, hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        day = Math.floor(hour / 24);
        hour = hour % 24;
        return {
            day: day,
            hour: hour,
            minute: minute,
            seconds: seconds
        };
    }

    console.log(props.gmt);

    return(
        <div className="sun_moon">
            
            <div>
                <div className="in_sm">
                <h2><WiDaySunny fontSize="50px"/> &nbsp; Sun</h2>
                <div className="sm_info"><p><b>Rise : </b></p> <p>{(props.weather_data.sunrise)} {String(props.gmt)} GMT</p></div>
                <div className="sm_info"><p><b>Set : </b></p> <p>{(props.weather_data.sunset)} {String(props.gmt)} GMT</p></div>
            </div>
            
            </div>
            
            
        </div>
    );
}