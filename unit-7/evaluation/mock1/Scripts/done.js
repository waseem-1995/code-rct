// Write code related to Done page here
// Write code related to Done page here
let tbody=document.querySelector("tbody");
let LSData=JSON.parse(localStorage.getItem("done-list"))||[];


function DisplayTable(data){
    tbody.innerHTML=null;
    data.forEach(function(element,index){
      let tr=document.createElement("tr")
  
      let name=document.createElement("td")
      name.innerText=element.name;
  
      let desc=document.createElement("td")
      desc.innerText=element.desc;
  
      let start =document.createElement("td")
      start.innerText=element. start;
  
      let end =document.createElement("td")
      end.innerText=element.end;
   
      let priority=document.createElement("td")
      priority.innerText=element.priority;
  
      let Add=document.createElement("td");
       Add.innerText="Add"
        Add.addEventListener("click",function(){
        addToLs("done-list",element)
        Delete(LSData,index)
     
    })

      tr.append(name,desc,start,end,priority)
      tbody.append(tr)
    })
  }
  
  DisplayTable(LSData)




