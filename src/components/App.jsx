import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import Live_weather from './Live_weather';
import About from "./About";
import { useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import reportWebVitals from './reportWebVitals';

export default function App(){

    let [clicked,setclicked] = React.useState(false);

    let [useeff,setuseeff]=React.useState(false);

    let [value_,setvalue] = React.useState();

    let [home,sethome]=React.useState(true);

    function updateclicked(value){
        // sethome(true);
        setclicked(true);
        setvalue(value);
    }


return(
  <div className='main'>
    <div className='header'>
      <Header updateclicked={()=>{setclicked(false)}}/>
        <div className='nav'>
          <div className="page" onClick={() => {sethome(true)}}>Home</div>
          <div className="page" onClick={() => {sethome(false)}}>About</div>
        </div>
        {clicked?
          <div className="search" id="search">
          <div className="icon"><SearchOutlinedIcon color="action"/></div>
          <input type="text" placeholder="Search Location" className="text" onChange={(event) => {setvalue(event.target.value)}} value={value_}></input>
          <button onClick={() => {setvalue(value_);sethome(true);setuseeff(!useeff)}} className="btn" id='btn'> Search</button>
          </div>
        : <div></div>}
      
    </div>
    {home?(!clicked? <Body updateclicked={updateclicked}/> : <Live_weather value={value_} useeff={useeff}/>):<About/>}
    
    
    
  </div>
);

}
