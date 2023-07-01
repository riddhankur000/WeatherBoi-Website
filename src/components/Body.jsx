import react from "react";
import { Typewriter } from "react-simple-typewriter";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { useEffect } from "react";

export default function Body(props){


    let [inp_value,setinp_value] = react.useState("");

    

    return(
        <div className="body">
            <div className="input">
                <div className="typewriter">
                    Get{" "}
                    <b>
                        <Typewriter
                            words={[
                            "Live weather of any Location",
                            "Daily Forecast",
                            "Live Weather News"
                        ]}
                    loop={false}
                    cursor={true}
                    cursorStyle="|"
                    typeSpeed={90}
                    deleteSpeed={100}
                    />
                    </b>
                </div>
                <div className="search">
                    <div className="icon"><SearchOutlinedIcon color="action"/></div>
                <input type="text" placeholder="Search Location" className="text" onChange={(event) => {setinp_value(event.target.value)}} value={inp_value}></input>
                <button onClick={(event) => {props.updateclicked(inp_value)}} className="btn"> Search</button>
                </div>
                
                
            </div>
        </div>
    );
}