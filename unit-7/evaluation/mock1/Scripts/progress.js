// Write code for the Progress page here 
// Write code related to dashboard page here
let LSData=JSON.parse(localStorage.getItem("priority-list")) || []

let tbody=document.querySelector("tbody")


function TableData(data){
    tbody.innerHTML=null
    console.log(data)
    data.forEach(function(el,index){
        let tr=document.createElement("tr")

        let name=document.createElement("td");
        name.innerText=el.name

        let desc=document.createElement("td");
        desc.innerText=el.desc

        let start=document.createElement("td");
        start.innerText=el.start


        let end=document.createElement("td");
        end.innerText=el.end

        let priority=document.createElement("td");
        priority.innerText=el.priority;

        let Add=document.createElement("td");
        Add.innerText="Add";

        Add.addEventListener("click",function(){
            addtoLocal("done-list",el)
            DeleteData(LSData,index)
        })

        tr.append(name,desc,start,end,priority,Add)
        tbody.append(tr)
        
    })
}

TableData(LSData)



function addtoLocal(key,value){
    let latestLSData=JSON.parse(localStorage.getItem(key)) || []
    latestLSData.push(value)
    localStorage.setItem(key,JSON.stringify(latestLSData))
}

function DeleteData(data,index){
    LSData=data.filter(function(el,i){
        return i!= index;
    })
    localStorage.setItem("priority-list",JSON.stringify(LSData))
    TableData(LSData)
}