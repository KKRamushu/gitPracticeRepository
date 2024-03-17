const todoList = [];


function renderTodoList(){
  let todoListHtml = '';

  todoList.forEach((todoObject,i) =>{
    let {name,dueDate} = todoObject; 
    let html = 
      `
        <div>${name}</div> <div> ${dueDate}</div>
        <button onclick="todoList.splice(${i},1);renderTodoList();" class="delete-button">Delete</button>
      `;
    todoListHtml += html;
  });

  console.log(`${name}`);
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;

  document.querySelectorAll('.delete-button').forEach((deleteButton,i)=>{
    deleteButton.addEventListener('click',()=>{ todoList.splice(i,1);
      renderTodoList();
    }
  );
    
    
  })
}

const AddTodoTask = document.querySelector('.todo-body');
AddTodoTask.addEventListener('keydown', (event)=>{
  if (event.key==='Enter'){ 
    console.log(event);
    addTodo();
  }
} );

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInput =document.querySelector('.js-due-date');
  const dueDate = dateInput.value;

  
  console.log(todoList); 
  if(name!=''){
    todoList.push({name,dueDate});
    inputElement.value ='';
    renderTodoList();
  }else{
    alert('enter task');
  }
  
}

