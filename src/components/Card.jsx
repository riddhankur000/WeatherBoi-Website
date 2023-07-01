import react from "react";
import { WiDayStormShowers } from 'react-icons/wi';
import { WiNightLightning } from 'react-icons/wi';
import { WiRainMix } from 'react-icons/wi';
import { WiNightRain } from 'react-icons/wi';
import { WiCloudyGusts } from 'react-icons/wi';
import { WiDayRainMix } from 'react-icons/wi';
import { WiDaySnow } from 'react-icons/wi';
import { WiNightSnow } from 'react-icons/wi';
import { WiDayFog } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';
import { WiDaySunnyOvercast } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';

import { FaCloudSun } from 'react-icons/fa';

export default function Card(props){
    // {props.datetime}
    return(
        <div className="Card">
                <h3>{props.datetime}</h3>
                <div className="inCard">
                    <p>{props.temp}</p>
                    <p  className="w_code">{props.w_code===200||props.w_code===201||props.w_code===202?<WiDayStormShowers/>:
        (props.w_code===230||props.w_code===231||props.w_code===232||props.w_code===233? <WiNightLightning/>:
        (props.w_code===300||props.w_code===301||props.w_code===302?<WiRainMix/>:
        (props.w_code===500||props.w_code===501||props.w_code===511||props.w_code===520||props.w_code===522||props.w_code===900?<WiNightRain/>:
        (props.w_code===502||props.w_code===611||props.w_code===612?<WiCloudyGusts/>:
        (props.w_code===521?<WiDayRainMix/>:
        (props.w_code===600||props.w_code===610||props.w_code===621?<WiDaySnow/>:
        (props.w_code===602||props.w_code===601||props.w_code===622||props.w_code===623?<WiNightSnow/>:
        (props.w_code===700||props.w_code===711||props.w_code===721||props.w_code===731||props.w_code===741||props.w_code===751?<WiDayFog/>:
        (props.w_code===800?<WiDaySunny/>:
        (props.w_code===801||props.w_code===802?<WiDaySunnyOvercast/>:
        (props.w_code===803?<WiDayCloudy/>:
        (props.w_code===804?<WiCloudy/>:
        <FaCloudSun/>
    ))))))))))))}</p>
                <p>{props.precip}</p>
                <p>{props.wind_spd}</p>
                <p className="wnd_dir">{props.wind_cdir_full}</p>
                <p>{props.clouds}</p>
                <p>{props.descrptn}</p>
                </div>
                
            </div>
    );
}