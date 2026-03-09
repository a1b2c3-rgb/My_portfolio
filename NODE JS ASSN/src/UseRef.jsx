import React, {useState, useEffect, useRef} from "react";

function UseRef(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function handleref1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function handleref2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="yellow";
        inputRef3.current.style.backgroundColor="";
    }

    function handleref3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
        
    }
    return(<div>
        <h1>Use of useRef</h1>
        <button onClick={handleref1}>Click 1</button> <br />
        <input type="text" ref={inputRef1} /> <br />

        <button onClick={handleref2}>Click 2</button> <br />
        <input type="text" ref={inputRef2} /> <br />

        <button onClick={handleref3}>Click 3</button> <br />
        <input type="text" ref={inputRef3} />
    </div>)
}
export default UseRef