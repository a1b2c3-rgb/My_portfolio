const todo = document.getElementById("text-box");
const addContainer = document.getElementById("task-list");
function addTask(){
    if(todo.value===''){
        alert("please put a task to add ");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML=todo.value;
        addContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
        
    }
    todo.value='';
}
addContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", addContainer.innerHTML);
}
function showTask(){
    addContainer.innerHTML=localStorage.getItem("data");
}
showTask();

