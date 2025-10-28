import {useState} from "react";
function Greeting(){
    const[message,setMessage]=useState("Hello Sundaram");
    function changeMessage(){
        setMessage("You clicked the button!");
    }
    return(
        <div>
            <h2>{message}</h2>
            <button onClick={changeMessage}>Click me</button>
        </div>
    );
}

export default Greeting;