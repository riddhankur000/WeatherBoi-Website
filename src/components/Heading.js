import react from "react";
import Icon from "./Icon";
// import { FiWind } from 'react-icons/fa';
import { WiStrongWind } from "react-icons/wi";

export default function Heading(props){

    // console.log(((props.date_time).substr(-8,-6)));
    // let [day,setday]=react.useState();

    // function updateday(t){
    //     setday(t);
    // }
    // if(parseInt(((props.date_time).slice(-8,-6))>=6&&parseInt((props.date_time).slice(-8,-6))<18)){
    //     updateday(true);
    // }
    // else{
    //     updateday(false);
    // }
    // let [code_sts,setcode_sts]=react.useState(0);
    // function updatecode_sts(num){
    //     setcode_sts(num);
    // }

    // if(props.code===200||props.code===201||props.code===202){
    //     updatecode_sts(1);
    // }
    // else if(props.code===230||props.code===231||props.code===232||props.code===233){
    //     updatecode_sts(2);
    // }
    // else if(props.code===300||props.code===301||props.code===302||props.code===233){
    //     updatecode_sts(3);
    // }
    // else if(props.code===500||props.code===501||props.code===511||props.code===520||props.code===900){
    //     updatecode_sts(4);
    // }
    // else if(props.code===502){
    //     updatecode_sts(5);
    // }
    // else if(props.code===521||props.code===522){
    //     updatecode_sts(6);
    // }
    // else if(props.code===600){
    //     updatecode_sts(7);
    // }
    // else if(props.code===601||props.code===602){
    //     updatecode_sts(8);
    // }
    // else if(props.code===610||props.code===621){
    //     updatecode_sts(9);
    // }
    // else if(props.code===611||props.code===612){
    //     updatecode_sts(10);
    // }
    // else if(props.code===622||props.code===623){
    //     updatecode_sts(11);
    // }
    // else if(props.code===700||props.code===711||props.code===721||props.code===731||props.code===741||props.code===751){
    //     updatecode_sts(12);
    // }
    // else if(props.code===800){
    //     updatecode_sts(13);
    // }
    // else if(props.code===801||props.code===802){
    //     updatecode_sts(14);
    // }
    // else if(props.code===803){
    //     updatecode_sts(15);
    // }
    // else if(props.code===804){
    //     updatecode_sts(16);
    // }
    // else{
    //     updatecode_sts(17);
    // }

    // var iconurl = "./icons/" + props.weather_data.weather.icon + ".png";
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
                <p>{props.weather_data.app_temp} °C</p>
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