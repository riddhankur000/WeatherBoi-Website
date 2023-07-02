import react from "react";
// import { Outlet, Link } from "react-router-dom";

export default function Header(props){

    return(
        <div className="header">
            
            <div className="title"><h1 onClick={()=>{props.updateclicked(); props.updatehome();}}>Weatherboi</h1></div>
           
        </div>
    );
}