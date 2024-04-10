
const addButton = document.querySelector('.add-input');
const todoContainer = document.querySelector('.todo-container');
const inputContent = document.querySelector('.what-to-do-input');
const deleteTodo= document.querySelector('.delete-todo');
const todoTaskHandle= document.querySelector('.todo-task-handle');
const checkBox= document.querySelector('.checkbox');
const todoContent= document.querySelector('.todo-contant');
  
   function createDiv(){
         let textInside = document.querySelector('.what-to-do-input').value;
         
         if (textInside === '') {
               inputContent.placeholder = 'Task required!';
               return; 
         }
         

         let newCheckbar = document.createElement('button');
         newCheckbar.classList.add('checkbox');

         let newTodoContent = document.createElement('div');
         newTodoContent.classList.add('todo-content');
         newTodoContent.textContent = textInside;


         let newDeleteTodo= document.createElement('button');
         newDeleteTodo.classList.add('delete-todo');
         newDeleteTodo.textContent='x';

         let taskHandle = document.createElement('div');
         taskHandle.classList.add('todo-task-handle');

         taskHandle.appendChild(newCheckbar);
         taskHandle.appendChild(newTodoContent);
         taskHandle.appendChild(newDeleteTodo);

         todoContainer.appendChild(taskHandle);
         document.querySelector('.what-to-do-input').value = '';

         inputContent.placeholder = 'Enter task here';
 
 
         newDeleteTodo.addEventListener('click' , function(){
            taskHandle.remove();
           
         })  
         
         
         newCheckbar.addEventListener('click' , function(){
            if(newCheckbar.innerHTML==''){
            this.innerHTML = "✓";

            newTodoContent.style.opacity='0.5';
            newTodoContent.style.textDecoration='line-through';}
            else{
               this.innerHTML = "";

               newTodoContent.style.opacity='1';
               newTodoContent.style.textDecoration='';
            }
           });
   }
  



   document.addEventListener('keydown' , function(event){
      if(event.key=='Enter'){
         createDiv();
      }
     
   })

   addButton.addEventListener('click', createDiv);

   deleteTodo.addEventListener('click', function(){
   todoTaskHandle.remove();
   })
   
   checkBox.addEventListener('click' , function(){  
      if(checkBox.innerHTML==''){
         this.innerHTML = "✓";
         todoContent.style.opacity='0.5';
         todoContent.style.textDecoration='line-through';}
      else{
         this.innerHTML = "";

         todoContent.style.opacity='1';
         todoContent.style.textDecoration='';
      }
     
   });




    