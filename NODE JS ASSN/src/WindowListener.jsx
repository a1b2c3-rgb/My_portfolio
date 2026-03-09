import React, {useState, useEffect} from "react";
function WindowListener(){

    const [width, setWidth]=useState(window.innerWidth);
    const [height, setHeight]= useState(window.innerHeight);

    function handleresize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(()=>{
        window.addEventListener("resize", handleresize)
        console.log("event listener added")
        return ()=>{
        window.removeEventListener("resize", handleresize);
        console.log("event listener removed");
    }
    }, []);

    useEffect( ()=>{
        document.title=`size: ${width} x ${height}`
    }, [width, height])
          
    return(<div>
        
        <p>window width: {width}px</p>
        <p>window height: {height}px</p>
    </div>)

}
export default WindowListener;