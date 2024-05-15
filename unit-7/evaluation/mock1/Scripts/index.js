// Write code related to Home page here 
let LSData=JSON.parse(localStorage.getItem("task-list")) || []
let form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj={
        name:form.name.value,
        desc:form.desc.value,
        start:form.start.value,
        end:form.end.value,
        priority:form.priority.value,
    }
    LSData.push(obj)
    localStorage.setItem("task-list",JSON.stringify(LSData))
})