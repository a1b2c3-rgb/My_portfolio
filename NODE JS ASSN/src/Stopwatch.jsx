import React, {useState, useEffect, useRef} from "react";
function Stopwatch(){

    const [isRunning,setIsRunning ] =useState(false);
    const [elapsedtime, setElapsedtime]= useState(0);
    const startTime= useRef(0);
    const intervalId = useRef(null);

    useEffect(()=>{
        if(isRunning){
            intervalId.current =setInterval(()=>{
                 setElapsedtime(Date.now() - startTime.current)
                },10) 
        }
                 return () => {clearInterval( intervalId.current)}
            

    },[isRunning]);

    function start(){
        setIsRunnning(true);
        startTime.current=(Date.now()-elapsedtime);

    }

    function stop(){
        setIsRunning(false);
        
    }

    function reset(){
        setIsRunning(false);
        setElapsedtime(0);
    }

    function formarttime(){
        const hours = Math.floor(elapsedtime/(1000*60*60));
        const minutes = Math.floor((elapsedtime/(1000*60))%60);
        const seconds = Math.floor((elapsedtime/1000)%60);
        const miliseconds = Math.floor((elapsedtime%1000)/10);

        return`${padzero(minutes)}:${padzero(seconds)}:${padzero(miliseconds)}`;
    }
    function padzero(number){
         return (number<10? "0":"") + number;
       
    }

    return(
    <div className="stopwatch">
        <h1>The Stop Watch</h1>
        <div className="screen">

        <div className="timer">{formarttime()}</div>
        <div className="time-buttons">
            <button className="start-button" onClick={start}>Start</button>
            <button className="stop-button" onClick={stop}>Stop</button>
            <button className="reset-button" onClick={reset}>Reset</button>
        </div>
        </div>
    </div>)
}
export default Stopwatch