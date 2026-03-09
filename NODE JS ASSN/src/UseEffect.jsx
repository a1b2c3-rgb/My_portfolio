import React,{useState,useEffect} from "react";

function UseEffect(){

    const [count, setCount] =useState(0);
    const [color, setColor] = useState("green");

function addcount(){
    setCount(c=> c+1);
}
function subtractcount(){
    setCount(c=> c-1);
}
function changecolor(){
    setColor(c => c==="green"? "red": "green");
}
useEffect(()=>{
    document.title=`count: ${count} ${color}`
}, [count, color]);
    return(<div>
        <h2>use of useEffect</h2>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addcount}>Add</button>
        <button onClick={subtractcount}>Subtract</button> <br />
        <button onClick={changecolor}>change color</button>
    </div>)
}
export default UseEffect;