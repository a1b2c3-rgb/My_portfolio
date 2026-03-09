import React, {useState} from "react";
function Updater(){

    const [update, setUpdate]=useState(0);
const updater = 0;
    function deupdate(event){
        setUpdate (u => u-1);
        setUpdate (u => u-1);
        setUpdate (u => u-1);
    }
    function reset(event){
        setUpdate(u=>u=0);
    }
    function updateNumber(event){
        setUpdate(u=>u+1);
        setUpdate(u=>u+1);
        setUpdate(u=>u+1);
    }
    return(<div>
        <br /><br />
        <h1>Updater function </h1>
        <p>update: {update}</p>
        <button value={update} onClick={deupdate}>deupdate</button>
        <button value={update} onClick={reset}>reset</button>
        <button value={update} onClick={updateNumber}>update</button>
    </div>)
}
export default Updater