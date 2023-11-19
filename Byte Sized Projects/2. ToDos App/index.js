const form=document.querySelector('.todos_form');
const inputBox=document.querySelector(".input_box");
const taskContainer=document.querySelector(".task_list")

form.addEventListener('submit',(e)=>{
   e.preventDefault(); 
   if(inputBox.value.trim().length===0){
     alert('Kindly enter a valid task!')
   }else{
      let listItem=document.createElement("li");
      listItem.textContent=inputBox.value;
      taskContainer.appendChild(listItem);
      let cancelButton=document.createElement("span");
      cancelButton.textContent="\u00d7";
      listItem.appendChild(cancelButton);
      saveTask();
   }
   inputBox.value=""
})

taskContainer.addEventListener('click',(e)=>{
   if(e.target.tagName==='LI'){
       e.target.classList.toggle('checked');
       saveTask();
   }else if(e.target.tagName==="SPAN"){
       e.target.parentElement.remove();
       saveTask();
   }
},false);

function saveTask(){
    localStorage.setItem("toDos",taskContainer.innerHTML);
}

function showOldTasks(){
    taskContainer.innerHTML=localStorage.getItem("toDos")
}

showOldTasks()