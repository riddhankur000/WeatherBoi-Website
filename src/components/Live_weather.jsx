import react from "react";
import Heading from "./Heading";
import Forecast from "./Forecast";
import { useEffect } from "react";
import Today from "./Today";

export default function Live_weather(props){

    // let [value,setvalue]=react.useState(props.value);
    let [swtch,setswitch]=react.useState(false);
    let [weather_data,setdata]= react.useState({});
    let [forecast,setforecast]= react.useState({});
    let [location,setlocation]= react.useState({});
    let [gmt,setgmt]= react.useState({});
    let [json_gmt,setjson_gmt]= react.useState({});
    let [des,setdes]= react.useState("");
    let [temps,settemps]=react.useState([]);
    let [datetime,setdatetime]=react.useState([])
          let [wind_spd,setwind_spd]=react.useState([])
          let [wind_cdir_full,setwind_cdir_full]=react.useState([])
          let [precip,setprecip]=react.useState([])
          let [clouds,setclouds]=react.useState([])
   

          
    useEffect(() => {
      
      
      const fetchData = async () => {
        try {
            const url1 = ("http://api.openweathermap.org/geo/1.0/direct?q=" + props.value + "&appid=3f947f745642a1d0d389e9823bbf0dfc");
            const response1 = await fetch(url1);
            const json1 = await response1.json();
            
            console.log(json1);
            const lat=((json1[0].lat).toString());
            const lon=((json1[0].lon).toString());
            setlocation(json1[0]);
            
            const url_gmt = ("https://api.ipgeolocation.io/timezone?apiKey=1b1b98b9c12c47fe8cd5ede7375ce5ea&lat="+lat+"&long=" + lon);
            const response_gmt = await fetch(url_gmt);
            const json_gmt = await response_gmt.json();
            const zone = json_gmt.timezone;
            setjson_gmt(json_gmt);
            // console.log(json_gmt);
            
            const url_gmt_ = ("https://worldtimeapi.org/api/timezone/"+zone);
            const response_gmt_ = await fetch(url_gmt_);
            const json_gmt_ = await response_gmt_.json();
            setgmt(json_gmt_.utc_offset);
            console.log(gmt);

            // const url2 = "https://api.weatherbit.io/v2.0/forecast/daily?lat=" +lat + "&lon=" + lon + "&key=01bb1717d29c4b3e9237758adee97bec";
            // const response2 = await fetch(url2);
            // const json2 = await response2.json();
            const json2 = {
              "city_name": "Kolkata",
              "country_code": "IN",
              "data": [
                  {
                      "app_max_temp": 39.7,
                      "app_min_temp": 32.6,
                      "clouds": 52,
                      "clouds_hi": 25,
                      "clouds_low": 27,
                      "clouds_mid": 22,
                      "datetime": "2023-06-28",
                      "dewpt": 24.5,
                      "high_temp": 33.1,
                      "low_temp": 27,
                      "max_dhi": null,
                      "max_temp": 33.4,
                      "min_temp": 27.6,
                      "moon_phase": 0.742046,
                      "moon_phase_lunation": 0.33,
                      "moonrise_ts": 1687935644,
                      "moonset_ts": 1687894383,
                      "ozone": 279.9,
                      "pop": 0,
                      "precip": -2.5625,
                      "pres": 1002.7,
                      "rh": 72,
                      "slp": 1004.2,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1687908470,
                      "sunset_ts": 1687957113,
                      "temp": 30.3,
                      "ts": 1687914060,
                      "uv": 8.8,
                      "valid_date": "2023-06-28",
                      "vis": 22.724,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "S",
                      "wind_cdir_full": "south",
                      "wind_dir": 185,
                      "wind_gust_spd": 7.1,
                      "wind_spd": 5.4
                  },
                  {
                      "app_max_temp": 41.1,
                      "app_min_temp": 31.2,
                      "clouds": 81,
                      "clouds_hi": 47,
                      "clouds_low": 16,
                      "clouds_mid": 36,
                      "datetime": "2023-06-29",
                      "dewpt": 26.5,
                      "high_temp": 31.4,
                      "low_temp": 28,
                      "max_dhi": null,
                      "max_temp": 31.4,
                      "min_temp": 27,
                      "moon_phase": 0.831769,
                      "moon_phase_lunation": 0.37,
                      "moonrise_ts": 1688025248,
                      "moonset_ts": 1687983112,
                      "ozone": 278.1,
                      "pop": 85,
                      "precip": 16.4,
                      "pres": 1002.7,
                      "rh": 87,
                      "slp": 1004.2,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1687994888,
                      "sunset_ts": 1688043519,
                      "temp": 29,
                      "ts": 1687978860,
                      "uv": 8.2,
                      "valid_date": "2023-06-29",
                      "vis": 23.261,
                      "weather": {
                          "icon": "t03d",
                          "description": "Thunderstorm with heavy rain",
                          "code": 202
                      },
                      "wind_cdir": "S",
                      "wind_cdir_full": "south",
                      "wind_dir": 180,
                      "wind_gust_spd": 1.1,
                      "wind_spd": 1.1
                  },
                  {
                      "app_max_temp": 43.5,
                      "app_min_temp": 33.9,
                      "clouds": 73,
                      "clouds_hi": 21,
                      "clouds_low": 24,
                      "clouds_mid": 39,
                      "datetime": "2023-06-30",
                      "dewpt": 26.8,
                      "high_temp": 32.7,
                      "low_temp": 28.3,
                      "max_dhi": null,
                      "max_temp": 32.7,
                      "min_temp": 28,
                      "moon_phase": 0.90798,
                      "moon_phase_lunation": 0.4,
                      "moonrise_ts": 1688115063,
                      "moonset_ts": 1688072220,
                      "ozone": 273.1,
                      "pop": 0,
                      "precip": 0,
                      "pres": 1002.1,
                      "rh": 83,
                      "slp": 1003.5,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688081307,
                      "sunset_ts": 1688129924,
                      "temp": 30.2,
                      "ts": 1688065260,
                      "uv": 5.3,
                      "valid_date": "2023-06-30",
                      "vis": 23.709,
                      "weather": {
                          "icon": "c04d",
                          "description": "Overcast clouds",
                          "code": 804
                      },
                      "wind_cdir": "S",
                      "wind_cdir_full": "south",
                      "wind_dir": 188,
                      "wind_gust_spd": 1,
                      "wind_spd": 1
                  },
                  {
                      "app_max_temp": 46.1,
                      "app_min_temp": 34.8,
                      "clouds": 66,
                      "clouds_hi": 29,
                      "clouds_low": 59,
                      "clouds_mid": 2,
                      "datetime": "2023-07-01",
                      "dewpt": 26.9,
                      "high_temp": 34.5,
                      "low_temp": 28.7,
                      "max_dhi": null,
                      "max_temp": 34.5,
                      "min_temp": 28.3,
                      "moon_phase": 0.964254,
                      "moon_phase_lunation": 0.43,
                      "moonrise_ts": 1688205137,
                      "moonset_ts": 1688161802,
                      "ozone": 274.3,
                      "pop": 0,
                      "precip": 0,
                      "pres": 1002,
                      "rh": 78,
                      "slp": 1003.5,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688167726,
                      "sunset_ts": 1688216327,
                      "temp": 31.2,
                      "ts": 1688151660,
                      "uv": 9.9,
                      "valid_date": "2023-07-01",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "SSW",
                      "wind_cdir_full": "south-southwest",
                      "wind_dir": 194,
                      "wind_gust_spd": 0.9,
                      "wind_spd": 0.9
                  },
                  {
                      "app_max_temp": 46.3,
                      "app_min_temp": 36.6,
                      "clouds": 67,
                      "clouds_hi": 65,
                      "clouds_low": 28,
                      "clouds_mid": 2,
                      "datetime": "2023-07-02",
                      "dewpt": 27,
                      "high_temp": 34.3,
                      "low_temp": 28.7,
                      "max_dhi": null,
                      "max_temp": 34.3,
                      "min_temp": 28.7,
                      "moon_phase": 0.994491,
                      "moon_phase_lunation": 0.47,
                      "moonrise_ts": 1688295452,
                      "moonset_ts": 1688251882,
                      "ozone": 271,
                      "pop": 0,
                      "precip": 0,
                      "pres": 1001,
                      "rh": 79,
                      "slp": 1002.5,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688254146,
                      "sunset_ts": 1688302730,
                      "temp": 31.3,
                      "ts": 1688238060,
                      "uv": 9,
                      "valid_date": "2023-07-02",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "SSW",
                      "wind_cdir_full": "south-southwest",
                      "wind_dir": 199,
                      "wind_gust_spd": 0.8,
                      "wind_spd": 0.8
                  },
                  {
                      "app_max_temp": 45.8,
                      "app_min_temp": 36.5,
                      "clouds": 68,
                      "clouds_hi": 63,
                      "clouds_low": 21,
                      "clouds_mid": 22,
                      "datetime": "2023-07-03",
                      "dewpt": 27,
                      "high_temp": 34.1,
                      "low_temp": 28.7,
                      "max_dhi": null,
                      "max_temp": 34.1,
                      "min_temp": 28.7,
                      "moon_phase": 0.994218,
                      "moon_phase_lunation": 0.5,
                      "moonrise_ts": 1688385892,
                      "moonset_ts": 1688342354,
                      "ozone": 269.9,
                      "pop": 0,
                      "precip": 0,
                      "pres": 1000.3,
                      "rh": 79,
                      "slp": 1001.8,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688340566,
                      "sunset_ts": 1688389132,
                      "temp": 31.2,
                      "ts": 1688324460,
                      "uv": 11.2,
                      "valid_date": "2023-07-03",
                      "vis": 24.09,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "S",
                      "wind_cdir_full": "south",
                      "wind_dir": 177,
                      "wind_gust_spd": 0.7,
                      "wind_spd": 0.7
                  },
                  {
                      "app_max_temp": 44.8,
                      "app_min_temp": 36.5,
                      "clouds": 69,
                      "clouds_hi": 44,
                      "clouds_low": 22,
                      "clouds_mid": 31,
                      "datetime": "2023-07-04",
                      "dewpt": 26.9,
                      "high_temp": 33.8,
                      "low_temp": 28.5,
                      "max_dhi": null,
                      "max_temp": 33.8,
                      "min_temp": 28.7,
                      "moon_phase": 0.961921,
                      "moon_phase_lunation": 0.53,
                      "moonrise_ts": 1688476240,
                      "moonset_ts": 1688432993,
                      "ozone": 268.4,
                      "pop": 0,
                      "precip": 0,
                      "pres": 998.8,
                      "rh": 79,
                      "slp": 1000.2,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688426987,
                      "sunset_ts": 1688475532,
                      "temp": 31.1,
                      "ts": 1688410860,
                      "uv": 11.2,
                      "valid_date": "2023-07-04",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "SSE",
                      "wind_cdir_full": "south-southeast",
                      "wind_dir": 150,
                      "wind_gust_spd": 0.7,
                      "wind_spd": 0.7
                  },
                  {
                      "app_max_temp": 44.2,
                      "app_min_temp": 35.7,
                      "clouds": 74,
                      "clouds_hi": 66,
                      "clouds_low": 26,
                      "clouds_mid": 10,
                      "datetime": "2023-07-05",
                      "dewpt": 26.9,
                      "high_temp": 33.2,
                      "low_temp": 28.3,
                      "max_dhi": null,
                      "max_temp": 33.2,
                      "min_temp": 28.5,
                      "moon_phase": 0.961921,
                      "moon_phase_lunation": 0.57,
                      "moonrise_ts": 1688566275,
                      "moonset_ts": 1688519393,
                      "ozone": 268.4,
                      "pop": 0,
                      "precip": 0,
                      "pres": 997.3,
                      "rh": 81,
                      "slp": 998.7,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688513408,
                      "sunset_ts": 1688561932,
                      "temp": 30.6,
                      "ts": 1688497260,
                      "uv": 11.3,
                      "valid_date": "2023-07-05",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c04d",
                          "description": "Overcast clouds",
                          "code": 804
                      },
                      "wind_cdir": "SSE",
                      "wind_cdir_full": "south-southeast",
                      "wind_dir": 157,
                      "wind_gust_spd": 0.9,
                      "wind_spd": 0.9
                  },
                  {
                      "app_max_temp": 43.2,
                      "app_min_temp": 35,
                      "clouds": 76,
                      "clouds_hi": 99,
                      "clouds_low": 45,
                      "clouds_mid": 3,
                      "datetime": "2023-07-06",
                      "dewpt": 26.9,
                      "high_temp": 32.4,
                      "low_temp": 28.3,
                      "max_dhi": null,
                      "max_temp": 32.4,
                      "min_temp": 28.3,
                      "moon_phase": 0.899701,
                      "moon_phase_lunation": 0.6,
                      "moonrise_ts": 1688655880,
                      "moonset_ts": 1688609965,
                      "ozone": 269.1,
                      "pop": 0,
                      "precip": 0,
                      "pres": 997.7,
                      "rh": 83,
                      "slp": 999.1,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688599830,
                      "sunset_ts": 1688648330,
                      "temp": 30.2,
                      "ts": 1688583660,
                      "uv": 11.3,
                      "valid_date": "2023-07-06",
                      "vis": 23.358,
                      "weather": {
                          "icon": "c04d",
                          "description": "Overcast clouds",
                          "code": 804
                      },
                      "wind_cdir": "S",
                      "wind_cdir_full": "south",
                      "wind_dir": 179,
                      "wind_gust_spd": 0.9,
                      "wind_spd": 0.9
                  },
                  {
                      "app_max_temp": 44.4,
                      "app_min_temp": 34.7,
                      "clouds": 75,
                      "clouds_hi": 88,
                      "clouds_low": 42,
                      "clouds_mid": 5,
                      "datetime": "2023-07-07",
                      "dewpt": 26.9,
                      "high_temp": 33,
                      "low_temp": 28.3,
                      "max_dhi": null,
                      "max_temp": 33,
                      "min_temp": 28.3,
                      "moon_phase": 0.812839,
                      "moon_phase_lunation": 0.64,
                      "moonrise_ts": 1688745067,
                      "moonset_ts": 1688700337,
                      "ozone": 269.8,
                      "pop": 0,
                      "precip": 0,
                      "pres": 998.9,
                      "rh": 82,
                      "slp": 1000.4,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688686252,
                      "sunset_ts": 1688734727,
                      "temp": 30.4,
                      "ts": 1688670060,
                      "uv": 11.3,
                      "valid_date": "2023-07-07",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c04d",
                          "description": "Overcast clouds",
                          "code": 804
                      },
                      "wind_cdir": "SSW",
                      "wind_cdir_full": "south-southwest",
                      "wind_dir": 202,
                      "wind_gust_spd": 0.9,
                      "wind_spd": 0.9
                  },
                  {
                      "app_max_temp": 43.8,
                      "app_min_temp": 34.1,
                      "clouds": 74,
                      "clouds_hi": 75,
                      "clouds_low": 23,
                      "clouds_mid": 3,
                      "datetime": "2023-07-08",
                      "dewpt": 26.8,
                      "high_temp": 35.8,
                      "low_temp": 26.5,
                      "max_dhi": null,
                      "max_temp": 33.1,
                      "min_temp": 26.5,
                      "moon_phase": 0.708607,
                      "moon_phase_lunation": 0.67,
                      "moonrise_ts": 1688833923,
                      "moonset_ts": 1688790489,
                      "ozone": 272.3,
                      "pop": 10,
                      "precip": 0.25,
                      "pres": 999.8,
                      "rh": 80,
                      "slp": 1001.3,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688772674,
                      "sunset_ts": 1688821123,
                      "temp": 30.6,
                      "ts": 1688756460,
                      "uv": 11.3,
                      "valid_date": "2023-07-08",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c04d",
                          "description": "Overcast clouds",
                          "code": 804
                      },
                      "wind_cdir": "SSW",
                      "wind_cdir_full": "south-southwest",
                      "wind_dir": 194,
                      "wind_gust_spd": 1.2,
                      "wind_spd": 1.1
                  },
                  {
                      "app_max_temp": 38.2,
                      "app_min_temp": 33.2,
                      "clouds": 60,
                      "clouds_hi": 100,
                      "clouds_low": 60,
                      "clouds_mid": 44,
                      "datetime": "2023-07-09",
                      "dewpt": 23.6,
                      "high_temp": 36.8,
                      "low_temp": 25.7,
                      "max_dhi": null,
                      "max_temp": 36.8,
                      "min_temp": 25.7,
                      "moon_phase": 0.594934,
                      "moon_phase_lunation": 0.7,
                      "moonrise_ts": 1688922562,
                      "moonset_ts": 1688880467,
                      "ozone": 268.3,
                      "pop": 25,
                      "precip": 0.875,
                      "pres": 1000.5,
                      "rh": 66,
                      "slp": 1002,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688859097,
                      "sunset_ts": 1688907518,
                      "temp": 31,
                      "ts": 1688842860,
                      "uv": 11.3,
                      "valid_date": "2023-07-09",
                      "vis": 24.048,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "SE",
                      "wind_cdir_full": "southeast",
                      "wind_dir": 142,
                      "wind_gust_spd": 8.5,
                      "wind_spd": 6.2
                  },
                  {
                      "app_max_temp": 39,
                      "app_min_temp": 33.6,
                      "clouds": 50,
                      "clouds_hi": 3,
                      "clouds_low": 50,
                      "clouds_mid": 0,
                      "datetime": "2023-07-10",
                      "dewpt": 23.9,
                      "high_temp": 36.9,
                      "low_temp": 25.8,
                      "max_dhi": null,
                      "max_temp": 36.9,
                      "min_temp": 25.8,
                      "moon_phase": 0.479311,
                      "moon_phase_lunation": 0.74,
                      "moonrise_ts": 1689011092,
                      "moonset_ts": 1688970344,
                      "ozone": 267.4,
                      "pop": 70,
                      "precip": 7,
                      "pres": 1000.3,
                      "rh": 67,
                      "slp": 1001.7,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1688945521,
                      "sunset_ts": 1688993912,
                      "temp": 31.1,
                      "ts": 1688929260,
                      "uv": 11.3,
                      "valid_date": "2023-07-10",
                      "vis": 20.28,
                      "weather": {
                          "icon": "t02d",
                          "description": "Thunderstorm with rain",
                          "code": 201
                      },
                      "wind_cdir": "SSE",
                      "wind_cdir_full": "south-southeast",
                      "wind_dir": 157,
                      "wind_gust_spd": 7,
                      "wind_spd": 5.3
                  },
                  {
                      "app_max_temp": 39.8,
                      "app_min_temp": 34.7,
                      "clouds": 62,
                      "clouds_hi": 51,
                      "clouds_low": 57,
                      "clouds_mid": 0,
                      "datetime": "2023-07-11",
                      "dewpt": 23.8,
                      "high_temp": 37.9,
                      "low_temp": 26.2,
                      "max_dhi": null,
                      "max_temp": 37.9,
                      "min_temp": 26.2,
                      "moon_phase": 0.368126,
                      "moon_phase_lunation": 0.77,
                      "moonrise_ts": 1689099611,
                      "moonset_ts": 1689060190,
                      "ozone": 267.6,
                      "pop": 20,
                      "precip": 0.8125,
                      "pres": 1000.5,
                      "rh": 65,
                      "slp": 1002,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1689031944,
                      "sunset_ts": 1689080305,
                      "temp": 31.8,
                      "ts": 1689015660,
                      "uv": 11.3,
                      "valid_date": "2023-07-11",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "SSE",
                      "wind_cdir_full": "south-southeast",
                      "wind_dir": 154,
                      "wind_gust_spd": 5.9,
                      "wind_spd": 4.7
                  },
                  {
                      "app_max_temp": 40.5,
                      "app_min_temp": 34.4,
                      "clouds": 59,
                      "clouds_hi": 61,
                      "clouds_low": 49,
                      "clouds_mid": 0,
                      "datetime": "2023-07-12",
                      "dewpt": 23.6,
                      "high_temp": 38.4,
                      "low_temp": 26.3,
                      "max_dhi": null,
                      "max_temp": 38.4,
                      "min_temp": 26.3,
                      "moon_phase": 0.266431,
                      "moon_phase_lunation": 0.8,
                      "moonrise_ts": 1689101807,
                      "moonset_ts": 1689150053,
                      "ozone": 269,
                      "pop": 15,
                      "precip": 0.625,
                      "pres": 1000.5,
                      "rh": 63,
                      "slp": 1002,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1689118368,
                      "sunset_ts": 1689166696,
                      "temp": 32.1,
                      "ts": 1689102060,
                      "uv": 11.3,
                      "valid_date": "2023-07-12",
                      "vis": 24.128,
                      "weather": {
                          "icon": "c03d",
                          "description": "Broken clouds",
                          "code": 803
                      },
                      "wind_cdir": "SSE",
                      "wind_cdir_full": "south-southeast",
                      "wind_dir": 161,
                      "wind_gust_spd": 5.6,
                      "wind_spd": 4.4
                  },
                  {
                      "app_max_temp": 39.1,
                      "app_min_temp": 34.8,
                      "clouds": 36,
                      "clouds_hi": 5,
                      "clouds_low": 36,
                      "clouds_mid": 3,
                      "datetime": "2023-07-13",
                      "dewpt": 24,
                      "high_temp": 36.8,
                      "low_temp": 26.4,
                      "max_dhi": null,
                      "max_temp": 36.8,
                      "min_temp": 26.4,
                      "moon_phase": 0.178036,
                      "moon_phase_lunation": 0.84,
                      "moonrise_ts": 1689190559,
                      "moonset_ts": 1689239943,
                      "ozone": 267.8,
                      "pop": 20,
                      "precip": 0.6875,
                      "pres": 1000.3,
                      "rh": 66,
                      "slp": 1001.7,
                      "snow": 0,
                      "snow_depth": 0,
                      "sunrise_ts": 1689204793,
                      "sunset_ts": 1689253087,
                      "temp": 31.4,
                      "ts": 1689188460,
                      "uv": 11.3,
                      "valid_date": "2023-07-13",
                      "vis": 23.976,
                      "weather": {
                          "icon": "c02d",
                          "description": "Scattered clouds",
                          "code": 802
                      },
                      "wind_cdir": "SSE",
                      "wind_cdir_full": "south-southeast",
                      "wind_dir": 160,
                      "wind_gust_spd": 5.6,
                      "wind_spd": 4.3
                  }
              ],
              "lat": 22.5414,
              "lon": 88.3577,
              "state_code": "28",
              "timezone": "Asia/Kolkata"
          }

          
            setforecast(json2.data[0]);
            settemps(json2.data.map((x) => {return x.temp}));
            setdatetime(json2.data.map((x) => {return x.datetime}));
            setclouds(json2.data.map((x) => {return x.clouds}));
            setwind_cdir_full(json2.data.map((x) => {return x.wind_cdir_full}));
            setwind_spd(json2.data.map((x) => {return x.wind_spd}));
            setprecip(json2.data.map((x) => {return x.precip}));
            
            
            // const url3 = "https://api.weatherbit.io/v2.0/current?lat=" +lat + "&lon=" + lon + "&key=01bb1717d29c4b3e9237758adee97bec&include=minutely";
            // const response3 = await fetch(url3);
            // const json3 = await response3.json();
            
            const json3 = {
              "count": 1,
              "data": [
                  {
                      "app_temp": 30.6,
                      "aqi": 162,
                      "city_name": "Kolkata",
                      "clouds": 97,
                      "country_code": "IN",
                      "datetime": "2023-06-28:16",
                      "dewpt": 24.8,
                      "dhi": 0,
                      "dni": 0,
                      "elev_angle": -34.38,
                      "ghi": 0,
                      "gust": null,
                      "h_angle": -90,
                      "lat": 22.5414,
                      "lon": 88.3577,
                      "ob_time": "2023-06-28 16:13",
                      "pod": "n",
                      "precip": 0.6526552,
                      "pres": 1004.5,
                      "rh": 88,
                      "slp": 1005,
                      "snow": 0,
                      "solar_rad": 0,
                      "sources": [
                          "VECC"
                      ],
                      "state_code": "28",
                      "station": "VECC",
                      "sunrise": "23:24",
                      "sunset": "12:55",
                      "temp": 27,
                      "timezone": "Asia/Kolkata",
                      "ts": 1687968812,
                      "uv": 0,
                      "vis": 16,
                      "weather": {
                          "description": "Drizzle",
                          "code": 301,
                          "icon": "d02n"
                      },
                      "wind_cdir": "SSE",
                      "wind_cdir_full": "south-southeast",
                      "wind_dir": 160,
                      "wind_spd": 3.1
                  }
              ]
          }
          console.log(json3.data[0].weather.description);
            setdata(((json3).data[0]));
            setdes(((json3.data[0].weather.description)));
            
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, [props.useeff]);

    console.log(props.value);
    console.log(props.useeff);
    // console.log(weather_data);
    // // console.log(forecast[0].weather);
    // console.log(location);
    // console.log(gmt);
    // // console.log(temps[0]);
    // console.log(datetime);
    // console.log(clouds);
    // console.log(precip);
    // console.log((forecast.clouds));

    // const des=Object.values(weather_data.weather);
    // console.log(typeof(weather_data.weather));

    
    return(
        <div className="live_weather">
            <Heading weather_data={weather_data} forecast={forecast} city_name={location.name} date_time={json_gmt.date_time_txt} timezone={json_gmt.timezone} gmt={String(gmt)} des={des}/>
            <div className="switch">
                <div className="switch_" style={{background: !swtch? "rgba(255,255,255,1)":"rgba(255,255,255, 0.05)", color: !swtch? "rgb(22, 143, 151)":"rgb(186, 246, 255)"} } onClick={() => {setswitch(!swtch)}}>Today</div>
                <div className="switch_" style={{background: swtch? "rgba(255,255,255,1)":"rgba(255,255,255, 0.05)", color: swtch? "rgb(22, 143, 151)":"rgb(186, 246, 255)"}} onClick={() => {setswitch(!swtch)}}>Next 10 Days</div>
            </div>
            {!swtch?<Today weather_data={weather_data} forecast={forecast} gmt={gmt}/>:<Forecast datetime={datetime} temps={temps} wind_spd={wind_spd} wind_cdir_full={wind_cdir_full} clouds={clouds} precip={precip}/>}
            {/* <Today weather_data={weather_data} forecast={forecast} gmt={gmt}/> */}
            
            
        </div>
    );
}