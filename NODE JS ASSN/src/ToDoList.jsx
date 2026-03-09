import React, {useState} from "react";
function ToDoList(){
    const [task, setTask] = useState(["go home", "do laundry"]);
    const [newtask, setNewtask]=useState("");

    function handleinput(event){
        setNewtask(event.target.value);
    }

    function addtask(){
        if(newtask.trim()!==""){
            setTask(t=>[...t, newtask]);
            setNewtask("");
        }
    }

    function deletetask(index){
        const updatedtasks=task.filter((_,i) => i!==index);
        setTask(updatedtasks);
    }

    function movetaskup(index){
        if(index>0){
            const updatedtasks=[...task];
            [updatedtasks[index], updatedtasks[index-1]]= [updatedtasks[index-1], updatedtasks[index]];
            setTask(updatedtasks);
        }
    }

    function movetaskdown(index){
        if(index<task.length-1){
            const updatedtasks=[...task];
            [updatedtasks[index], updatedtasks[index+1]]= [updatedtasks[index+1], updatedtasks[index]];
            setTask(updatedtasks);
        }
        
    }
    return(<div className="todolist">
        <h1>To-Do-List</h1>
        <div className="inputlist">
            <input type="text" value={newtask} onChange={handleinput} 
            placeholder="enter a new task"/>
            <button onClick={addtask}>Add task</button>
        </div>
        <ol className="listtodo">
            {task.map((task, index) => 
            <li key={index}>
              <span> {task} </span> 
                <button className="delete" onClick={()=>
                    deletetask(index)}>Delete</button>
                <button className="move" onClick={()=>movetaskup(index)}>
                    Move up</button>
                <button className="move" onClick={()=>movetaskdown(index)}>
                    move down</button>
            </li>)}
        </ol>
    </div>);
}
export default ToDoList