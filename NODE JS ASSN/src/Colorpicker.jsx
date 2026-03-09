import react, {useState} from 'react'
function Colorpicker(){
    const [color, setcolor]=useState(" ");

    const colorchange=(event)=>{
        setcolor(event.target.value)
    }

    // function colorchange(event){
    //     setcolor(event.target.value)
    // }

    return(<div className='color-container'>
        <h1 id='mycolor'>color picker</h1>
         <div className="mycolors"style={{backgroundColor: color}}>
        <p>pick a color: {color}</p>
        </div>
       
            <label htmlFor="">color </label>
            <input type="color" value={color} 
               onChange={colorchange} /> 
               

        
    </div>);
}
export default Colorpicker