

function Renderlists(){
    // const fruit = ["apple", "banana", "lemon", "passion", "orange"];
     const fruit = [{id:1,name:"apple", calories: 40}, 
                   {is:2, name:"banana", calories: 50}, 
                   {id:3, name: "lemon", calories:20},
                   {id: 4, name: "passion", calories: 109}, 
                   {id: 5, name:"orange", calories: 30}];
                // fruit.sort((a,b)=>a.name.localeCompare(b.name)); // alphabetical order
                // fruit.sort((b,a)=>a.name.localeCompare(b.name)); // reverse alphabetical order
                // fruit.sort((a,b)=> a.calories - b.calories); //numerical sorting
                // fruit.sort((b,a)=> a.calories - b.calories); // reverse numerical sorting
    const fruitlist= fruit.map(fruit=> <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    return(
        <>
        <h1>Rendering lists</h1>
        <ol>{fruitlist}</ol>
        </>
      
    )

}
export default Renderlists