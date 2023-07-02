import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import Live_weather from './Live_weather';
import About from "./About";
import { useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import loading from "../styles/loading.css";
// import reportWebVitals from './reportWebVitals';

export default function App(){

    let [clicked,setclicked] = React.useState(false);

    let [useeff,setuseeff]=React.useState(false);

    let [value_,setvalue] = React.useState();

    let [home,sethome]=React.useState(true);

    let [valid,setvalid]=React.useState(false);

    let [loading,setloading]=React.useState(false);
  
  function updatevalid(){
    setvalid(true);
  }

  setTimeout(updatevalid, 2500);

    function updateclicked(value){
        // sethome(true);
        
        value!==""?setclicked(true):setclicked(false);
        setvalue(value);
    }

    useEffect(()=>{
      setvalid(false);
    },[loading]);


return(
  valid?<div className='main'>
    <div className='header'>
      <Header updateclicked={()=>{setclicked(false); setloading(!loading);}} updatehome={()=>{sethome(true)}}/>
        <div className='nav'>
          <div className="page"  style={{color:(home)?"rgb(46, 203, 215)":"aliceblue"}} onClick={() => {sethome(true)}}>Home</div>
          <div className="page"  style={{color:(home)?"aliceblue":"rgb(46, 203, 215)"}} onClick={() => {sethome(false)}}>About</div>
        </div>
        {(clicked)?
          <div className="search" id="search">
          <div className="icon"><SearchOutlinedIcon color="action"/></div>
          <input type="text" placeholder="Search Location" className="text" onChange={(event) => {setvalue(event.target.value)}} value={value_}></input>
          <button onClick={() => {setvalue(value_);sethome(true);setuseeff(!useeff)}} className="btn" id='btn'> Search</button>
          </div>
        : <div></div>}
      
    </div>
    {home?(!clicked? <Body updateclicked={updateclicked}/> : <Live_weather value={value_} useeff={useeff}/>):<About/>}
    
    
    
  </div>:<div className="loading"><h1 className="title font-calsans">Weatherboi
  </h1></div>
);

}
