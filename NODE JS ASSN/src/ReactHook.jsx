import react, {useState} from 'react';
function ReactHook(){
    const [name, setName] = useState("guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed]=useState("no");

    const changeName=()=> {
        setName("violet");
    }

    const increament=()=>{
        setAge(age+2);
    }

    const togglebetween =()=> {
        setIsEmployed(!isEmployed);
    }



    return(
        <div>
            <h1>React hook function</h1>
        <p>name: {name}</p>
        <button onClick={changeName}>change name</button>
        <p>Age: {age}</p>
        <button onClick={increament}>set age</button>
        <p>Is Employed:{isEmployed? "Yes": "No"}</p>
        <button onClick={togglebetween}>Employed?</button>
    </div>);

}
export default ReactHook