import React, {useState} from 'react';

//const state = useState();



const App= ()=>{
const state = useState();

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let curTime = h+":"+m+":"+s;

//time = new date().toLocaleTimeString();
let[time, setTime] = useState(curTime);

let getTime=()=>{
	setTime(curTime = h+":"+m+":"+s);
}

//let h = new Date().getHours();
//let m = new Date().getMinutes();
//let s = new Date().getSeconds();
//let curTime = h+":"+m+":"+s;

	
	return(
		<div>
		<h1>{time}</h1>
		<button onClick={getTime}>Get Time</button>

		</div>
		);

}
export default App;