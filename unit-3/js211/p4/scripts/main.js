// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  //import.meta.env.REACT_APP_JSON_SERVER_PORT
  9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

//window.addEventListener("load",()=>{})

loginUserButton.addEventListener("click", async function(){
  let userName = loginUserUsername.value;
  let password = loginUserPassword.value;

  let userobj = {
    username: userName,
    password: password
  }
console.log(userobj)
  try {
    let res = await fetch(userLoginURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userobj)
    })
  
    
     let data = await res.json();
    console.log(data)
     userAuthToken = data.accessToken;
     userId=data.user.id;
    localStorage.setItem("localAccessToken", data.accessToken);
    localStorage.setItem("userId",data.user.id);

    renderNotification(data.user.username)

  } catch (error) {
    alert('Err.', JSON.stringify(error))
  }
})


getTodoButton.addEventListener("click", async function() {
  let res = await fetch(urlAllTodosOfUser, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${userAuthToken}`
    }
  })
  let data = await res.json();
  renderTodoList(data)
})

function renderTodoList(todoData){
  mainSection.innerHTML=getAsTodoList(todoData);
  let todoItems=document.querySelectorAll(".todo-item-checkbox")
  for(let todoItem of todoItems){
    todoItem.addEventListener("change",async function(e){
      //console.dir(e.target)
      //console.dir(e.target.checked)
      let todoId=e.target.dataset.id;
      let checked=e.target.checked;
      await patchTodoItem(todoId,checked)
    })
  }
}


async function patchTodoItem(todoId,completed){
  let res = await fetch(`${urlTodosBase}${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${userAuthToken}`
    },
    body:JSON.stringify({completed:completed})
  })
}

function getAsTodoList(todoData){
  return`
  <div id="todo-list-wrapper" class="todo-list-wrapper">
    ${todoData
      .map((item)=>{
        return getAsTodoItem(item.id,item.title,item.completed)
      })
      .join("")
    }
  </div>
  `
}

function getAsTodoItem(id,title,completed){
  return`<label><input class="todo-item-checkbox" data-id="${id}" type="checkbox"${completed ? "checked":" "}>${title}</label>;
  `

}

function renderNotification(username){
  notificationWrapper.innerHTML=`
  <h5 class="notification info">
  hey ${username}, welcome back!
  </h5>
  `
}