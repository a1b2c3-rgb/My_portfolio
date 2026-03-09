import react, {useState} from 'react';
// counter program

function Counter(){
    const [count, setCount] = useState(0);
    

    const decrease=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

    const increase=()=>{
        setCount(count+1);
    }
    return(
    <div className="container">
        <h1>counter program</h1>
        <p>{count}</p>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>Increase</button>
        
    </div>
    
    )
}
export default Counter