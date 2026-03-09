import React, {useState} from "react"

function ArrayObjUpdate(){
    const [car, setCar]=useState([]);
    const [caryear, setCaryear]= useState(new Date().getFullYear());
    const [carmake, setCarmake] = useState("");
    const [carmodel, setCarmodel] = useState("");

    function handleaddcar(){
        const newcar={year:caryear, make:carmake, model:carmodel}
        setCar(c=>[...car, newcar]);
        setCaryear(new Date().getFullYear());
        setCarmake("");
        setCarmodel("");
    }

    function handleremovecar(index){
        setCar(c=> car.filter((_, i)=> i!==index));
    }

    function handlechangeyear(event){
        setCaryear(event.target.value)
    }

    function handlechangemake(event){
        setCarmake(event.target.value);
    }

    function handlechangemodel(event){
        setCarmodel(event.target.value);
    }
    return(<div>
        <h2>List of cars in array-object update</h2>
        <ul>
           {car.map((car, index)=> 
        <li key={index} onClick={()=> handleremovecar(index)}>
            {car.year} {car.make} {car.model}
        </li>)} <br />
        <input type="number" value={caryear} onChange={handlechangeyear} /> <br />
        <input type="text" value={carmake} onChange={handlechangemake} placeholder="enter car make"/> <br />
        <input type="text" value={carmodel} onChange={handlechangemodel} placeholder="enter car model"/> <br />
        <button onClick={handleaddcar}>Add car</button>
        </ul>
    </div>)

}
export default ArrayObjUpdate