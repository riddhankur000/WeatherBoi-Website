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

export default function Icon(props){
    return(
        <div>
        {props.code===200||props.code===201||props.code===202?<WiDayStormShowers/>:
        (props.code===230||props.code===231||props.code===232||props.code===233? <WiNightLightning/>:
        (props.code===300||props.code===301||props.code===302?<WiRainMix/>:
        (props.code===500||props.code===501||props.code===511||props.code===520||props.code===522||props.code===900?<WiNightRain/>:
        (props.code===502||props.code===611||props.code===612?<WiCloudyGusts/>:
        (props.code===521?<WiDayRainMix/>:
        (props.code===600||props.code===610||props.code===621?<WiDaySnow/>:
        (props.code===602||props.code===601||props.code===622||props.code===623?<WiNightSnow/>:
        (props.code===700||props.code===711||props.code===721||props.code===731||props.code===741||props.code===751?<WiDayFog/>:
        (props.code===800?<WiDaySunny/>:
        (props.code===801||props.code===802?<WiDaySunnyOvercast/>:
        (props.code===803?<WiDayCloudy/>:
        (props.code===804?<WiCloudy/>:
        <FaCloudSun/>
    ))))))))))))}

        </div>
        
    );
}
