import React,{useState, useEffect, useCallback} from "react";
function WorldClock(){

    const [time, setTime]=useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=>
            clearInterval(interval);
        
    },[])

    function formattime(){
        const hours= time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem= time.getHours() <12? "AM": "PM";
        const displayHours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;

    }
    function padZero(number){
        return (number<10? "0": "")+ number;
    }
 
    return(<div className="clock">
        <span className="time-clock">{formattime()}</span>
    </div>)
}
export default WorldClock;