import navbar from "../components/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()





function getInputValue(id){

    let value=document.getElementById(id).value;
    return value
}

//CF
function User(u,e,p){
  this.username=u;
  this.email=e;
  this.password=p;
}

function Register(){
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    
    data= new User(username,email,password);
    let user_data=JSON.parse(localStorage.getItem("signup_data"))||[]
    user_data.push(data)
    localStorage.setItem("signup_data",JSON.stringify(user_data));
    console.log(user_data)

    username.value="",
    email.value="",
    password.value=""

   
}
