let taskArea = document.getElementById('taskArea')

taskArea.style.padding = '10px'
taskArea.style.border = '1px solid black'
taskArea.style.borderRadius = "15px"
taskArea.style.width = '250px'

let inputSec = document.getElementById('inputSec')

inputSec.style.display = 'flex'
inputSec.style.justifyContent = 'center'
inputSec.style.flexDirection = 'row'
inputSec.style.gap = '20px'

let addTask = document.getElementById('addTask')
addTask.style.padding = '5px'
addTask.style.borderRadius = '15px'
addTask.style.border = '1px solid black'


function addTaskToList() {
     // Get the input element
     let taskArea = document.getElementById('taskArea');
 
     // Get the value from the input field
     let taskText = taskArea.value;
 
     if (taskText.trim() !== '') {
         // Create a new li element
         let newLi = document.createElement('li');
 
         // Set the text content of the new li element to the task
         newLi.textContent = taskText;
 
         // Append the new li element to the task list
         let taskList = document.querySelector('#taskList');
         taskList.appendChild(newLi);
 
         // Clear the input field after adding the task
         taskArea.value = '';
     }
 }
 