let inputTask=document.getElementById("inputTask");
let addBtn=document.getElementById("add");
let taskSection=document.getElementById("list");

addBtn.onclick=()=>addTask();
function handleInput()
{
   addBtn.disabled=inputTask.value==='';
}
function addTask()
{
    let subTask=document.createElement("li");
    subTask.innerText=inputTask.value;
    taskSection.appendChild(subTask);

    let cross=document.createElement("span");
    cross.innerText="\u00d7";
    subTask.append(cross);

    inputTask.value="";
    addBtn.disabled=true;
    storeTasks();
}
taskSection.addEventListener("click",function(e){
    if(e.target.tagName=='LI')
    {
        e.target.classList.toggle("checked");
        storeTasks();
    }
    else if(e.target.tagName=='SPAN')
    {
        e.target.parentElement.remove();
        storeTasks();
    }
});

function storeTasks()
{
    localStorage.setItem("data",taskSection.innerHTML);
}
function getTasks()
{
    taskSection.innerHTML=localStorage.getItem("data");
}
getTasks();