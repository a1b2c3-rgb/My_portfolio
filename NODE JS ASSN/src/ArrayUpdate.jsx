import React, {useState} from "react";
function ArrayUpdate(){
    
    const [food, setFood] = useState(["apple", "mango", "pear"])

    function handleaddfood(){
        const newfood = document.getElementById("inputfood").value;
        document.getElementById("inputfood").value = "";
        setFood(f=> [...f, newfood]);
    }

    function handleremovefood(index){
        setFood(food.filter((_, i)=>i!==index))
    }
    return(<div>
        <h2>List of foods in array update</h2>
        <ul>
            {food.map((food, index)=> 
            <li key={index} onClick={() =>handleremovefood(index)}>
                {food}
            </li>)}
        </ul>
        
        <input type="text" id="inputfood" placeholder="enter a new food"/>
        <button onClick={handleaddfood}>Add food</button>
    </div>);
}
export default ArrayUpdate