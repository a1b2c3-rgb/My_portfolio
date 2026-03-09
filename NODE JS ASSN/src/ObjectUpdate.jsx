import React, {useState} from "react";
function ObjectUpdate(){
    const [person, setPerson]=useState({name:"guest", age:10});

    function handlename(event){
        setPerson(p=>({...person, name: event.target.value}))
    }
    function handleage(event){
        setPerson(p=>({...person, age: event.target.value}))
    }
    function handlechild(event){
        setPerson(p=>({...person, child: event.target.value}))
    }
    return(<div>
        <br />
        <h1>Object update</h1>
        <h3>update info</h3>
        <p>Name: {person.name}  Age:{person.age}  Child:{person.child}</p>
        <input type="text" value={personalbar.name}placeholder="enter your name" onChange={handlename}/> <br /><br />
        <input type="number" value={person.age} onChange={handleage} placeholder="enter your age"/> <br /><br />
        <input type="text" value={person.child} onChange={handlechild} placeholder="enter your child's name"/>
    </div>)
}
export default ObjectUpdate