import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import Live_weather from './Live_weather';
import { useEffect } from 'react';
// import reportWebVitals from './reportWebVitals';

export default function App(){

    let [clicked,setclicked] = React.useState(false);

    let [value_,setvalue] = React.useState();

    

    function updateclicked(value){
        setclicked(true);
        setvalue(value);
    }


return(
  <div className='main'>
    <Header/>
    {!clicked? <Body updateclicked={updateclicked}/> : <Live_weather value={value_}/>}
    
    
  </div>
);

}
